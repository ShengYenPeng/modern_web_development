import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  console.log(props)
  return (
  <>
    <p>
      {props.name} {props.exercises}
    </p>
  </>
  )
}

const Content = (props) => (
  <>
    <Part {...props.parts[0]} />
    <Part {...props.parts[1]}/>
    <Part {...props.parts[2]}/>
  </>
)

const Total = (props) => (
  <>
    <p>Number of exercises {props.exercise_num}</p>
  </>
)

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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


  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total exercise_num={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App