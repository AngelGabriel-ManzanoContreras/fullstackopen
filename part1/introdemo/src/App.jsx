import { useState } from "react"

const Title = ({title}) => { return <h2>{title}</h2> }

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{ text }</td>
      <td>{ value }</td>
    </tr>
  )
}

const CustomButton = ({text, handleClick}) => { return <button onClick={handleClick}>{text}</button> }

const Statistics = ({good, neutral, bad}) => {
  const totalFeedback = good + neutral + bad
  const avarage = (good - bad) / ( totalFeedback ) || 0
  const positive = (good / ( totalFeedback )) * 100 || 0

  if ( totalFeedback === 0 ) {
    return (
      <section>
        <Title title="Statistics" />
        <p>No feedback given</p>
      </section>
    )
  }

  return (
    <section>
      <Title title="Statistics" />
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={totalFeedback} />
          <StatisticLine text="Avarage" value={avarage} />
          <StatisticLine text="Positive" value={`${positive} %`} />
        </tbody>
      </table>
    </section>
  )
}



const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

const Anecdote = ({ selected }) => {
  return (
    <section>
      <p>{ anecdotes[ selected ] }</p>
    </section>
  )
}

const App = () => {
  const [good, setGood] = useState(0)// 1
  const [neutral, setNeutral] = useState(0)// 0
  const [bad, setBad] = useState(0)// -1

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState( new Array( anecdotes.length ).fill(0) )

  const handleChange = ( fun, curval ) => {
    fun( curval + 1 )// increment the corresponding value, good, neutral or bad
  }

  const handleSelection = ( movement ) => {
    //const res = selected + movement
    const res = Math.floor( Math.random() * anecdotes.length )
    
    if ( res < 0 || res >= anecdotes.length ) {
      setSelected( 0 )
      return
    }

    setSelected( res )
  }

  const handleVote = () => {
    const copy = [ ...votes ]
    copy[ selected ] += 1
    setVotes( copy )
  }

  
  return (
    <>
      <Title title="Anecdotes" />
      <Anecdote selected={selected} />
      <p>Has { votes[selected] } votes</p>
      <CustomButton text="Next anecdote" handleClick={ handleSelection } />
      <CustomButton text="Vote" handleClick={ handleVote } />


      <br />
      <br />
      <Title title="Most voted anecdote" />
      <Anecdote selected={ votes.indexOf( Math.max( ...votes ) ) } />
      <p>Has { Math.max( ...votes ) } votes</p>

      {/* <br />
      <br />
      <br />
      <Title title="Give feedback" />

      <section>
        <CustomButton 
          text="Good" 
          handleClick={ () => handleChange(setGood, good) }
        />
        <CustomButton 
          text="Neutral" 
          handleClick={ () => handleChange(setNeutral, neutral) }
        />
        <CustomButton 
          text="Bad" 
          handleClick={ () => handleChange(setBad, bad) }
        />
      </section>

      <Statistics good={good} neutral={neutral} bad={bad} /> */}
    </>
  )
}

export default App