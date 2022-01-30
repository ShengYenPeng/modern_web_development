import React from 'react'

const Header = ({ name }) => {
    return (
      <>
        <h1>{name}</h1>
      </>
    )
  }
  
  const Part = ({ part }) => {
    return (
      <>
        <p>
          {part.name} {part.exercises}
        </p>
      </>
    )
  }
  
  const Total = ({ total_exercises }) => {
    return (
      <h4>total of {total_exercises} exercises</h4>
    )
  }
  
  const Content = ({ parts }) => {
    const total_exercises = parts.reduce((partial_sum, part) => partial_sum + part.exercises, 0)
    
    return (
      <>
      {parts.map(part => <Part key={part.id} part={part} />)}
      <Total total_exercises={total_exercises} />
      </>
    )
  }
  
  
  const Course = ({ course }) => {
  
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
      </div>
    )
  }

  export  {Course, Header}