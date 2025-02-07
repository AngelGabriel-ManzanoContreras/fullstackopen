import { useEffect, useState } from "react"

const Title = ({title}) => { return <h2>{title}</h2> }

const Result = ({text, value}) => { return <p>{text} {value}</p> }

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
      <Result text="Good" value={ good } />
      <Result text="Neutral" value={ neutral} />
      <Result text="Bad" value={ bad } />
      <br />
      <Result text="Avarage" value={ avarage } />
      <Result text="Positive" value={ `${ positive } %` } />
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