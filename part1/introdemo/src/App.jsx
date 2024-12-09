const Header = ({ course }) => {
  return (
    <h1>{ course }</h1>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      { 
        parts.map((item, index) => {
          return (
            <Part key={ index } part={ item.name } exercises={ item.exercises } />
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

const App = () => {
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

export default App