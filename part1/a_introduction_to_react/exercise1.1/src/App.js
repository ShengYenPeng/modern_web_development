import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
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

  const exercise_num = course.parts.reduce((partial_sum, part) => partial_sum+part.exercises, 0)

  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts} />
      <Total exercise_num={exercise_num} />
    </div>
  )
}

export default App