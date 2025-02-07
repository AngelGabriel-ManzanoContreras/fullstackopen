import { useState } from "react"

const Title = ({title}) => { return <h2>{title}</h2> }

const Result = ({text, value}) => { return <p>{text} {value}</p> }

const CustomButton = ({text, handleClick}) => { return <button onClick={handleClick}>{text}</button> }

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleChange = ( fun, curval ) => {
    fun( curval + 1 )
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

      <Title title="Statistics" />

      <section>
        <Result text="Good" value={ good } />
        <Result text="Neutral" value={ neutral} />
        <Result text="Bad" value={ bad } />
      </section>
    </>
  )
}

export default App