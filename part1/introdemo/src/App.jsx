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

const App = () => {
  const [good, setGood] = useState(0)// 1
  const [neutral, setNeutral] = useState(0)// 0
  const [bad, setBad] = useState(0)// -1

  const handleChange = ( fun, curval ) => {
    fun( curval + 1 )// increment the corresponding value, good, neutral or bad
  }
  
  return (
    <>
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

      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App