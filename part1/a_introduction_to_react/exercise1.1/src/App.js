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
    <Part {...props.part1} />
    <Part {...props.part2}/>
    <Part {...props.part3}/>
  </>
)

const Total = (props) => (
  <>
    <p>Number of exercises {props.exercise_num}</p>
  </>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercise_num={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App