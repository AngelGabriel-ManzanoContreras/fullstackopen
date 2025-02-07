import { useEffect, useState } from "react"

const Title = ({title}) => { return <h2>{title}</h2> }

const Result = ({text, value}) => { return <p>{text} {value}</p> }

const CustomButton = ({text, handleClick}) => { return <button onClick={handleClick}>{text}</button> }

const App = () => {
  const [good, setGood] = useState(0)// 1
  const [neutral, setNeutral] = useState(0)// 0
  const [bad, setBad] = useState(0)// -1

  const [avarage, setAvarage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleChange = ( fun, curval ) => {
    fun( curval + 1 )// increment the corresponding value, good, neutral or bad
  }

  useEffect(() => {
    // I isolated the calculation of the statistics
    // this way to use the most updated values of good, neutral and bad
    const totalFeedback = good + neutral + bad

    setAvarage( 
      (good - bad) / ( totalFeedback ) 
      || 0 // Assign 0 if the result is NaN
    )// Doesn't consider the neutral feedback coz it's treated as 0
    setPositive( 
      (good / ( totalFeedback )) * 100 
      || 0
    )
  }, [good, neutral, bad])
  
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

      <Title title="Statistics" />

      <section>
        <Result text="Good" value={ good } />
        <Result text="Neutral" value={ neutral} />
        <Result text="Bad" value={ bad } />
        <br />
        <Result text="Avarage" value={ avarage } />
        <Result text="Positive" value={ `${ positive } %` } />
      </section>
    </>
  )
}

export default App