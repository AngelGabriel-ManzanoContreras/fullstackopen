import { useState } from "react"

const Header = ({ course }) => {
  return (
    <h1>{ course }</h1>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      { 
        parts.map(({ name, exercises }, index) => {
          return (
            <Part key={ index } part={ name } exercises={ exercises } />
          )
        })
      }
    </>
  )
}

const Part = ({ part, exercises }) => {
  return (
    <p>{ part } { exercises }</p>
  )
}

const Total = ({ exercises }) => {
  return (
    <p>Number of exercises { exercises }</p>
  )
}

//old version of the app
const AppOLD = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const count = course.parts.reduce((acc, item) => { return acc + item.exercises }, 0)

  return (
    <div>
      <Header course={ course.name } />
      <Content parts={ course.parts } />
      <Total exercises={ count } />
    </div>
  )
}

const DisplayCounter = ({ counter }) => (<div>{ counter }</div>)

const CustomButton = ({ text, onClick }) => (<button onClick={ onClick }>{ text }</button>)

const App = () => {
  const [ counter, setCounter ] = useState( 0 )

  const increaseCounter = () => setCounter( counter + 1 );

  const decreaseCounter = () => setCounter( counter - 1 );
  
  const resetCounter = () => setCounter( 0 );
  
  return (
    <>
      <DisplayCounter counter={ counter } />
      <CustomButton
        text="Increase"
        onClick={ increaseCounter }
      />
      <CustomButton
        text="Decrease"
        onClick={ decreaseCounter }
      />
      <CustomButton
        text="Reset"
        onClick={ resetCounter }
      />
    </>
  )
}

// export default App