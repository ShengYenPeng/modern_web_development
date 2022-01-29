import React, { useState } from 'react'

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Average = ({ score, num }) => {
  const label = 'average'
  if (num === 0) {
    return (
      <StatisticLine text={label} value='0' />
    )
  }
  else {
    return (
      <StatisticLine text={label} value={score / num} />
    )
  }
}

const Positive = ({ score, num }) => {
  const label = 'positive'
  if (num === 0) {
    return (
      <StatisticLine text={label} value='0%' />
    )
  }
  else {

    return (
      <StatisticLine text={label} value={(100 * score / num) + '%'} />
    )
  }
}


const Statistics = ({ good, neutral, bad }) => {
  const all_feedback = (good + neutral + bad)
  const score = (good - bad)

  if (all_feedback === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  else {
    return (
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={all_feedback} />
          <Average score={score} num={all_feedback} />
          <Positive score={good} num={all_feedback} />
        </tbody>
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodByOne = () => setGood(good + 1)
  const increaseNeutralByOne = () => setNeutral(neutral + 1)
  const increaseBadByOne = () => setBad(bad + 1)

  return (
    <div>
      <Header text='give feedback' />
      <Button text='good' onClick={increaseGoodByOne} />
      <Button text='neutral' onClick={increaseNeutralByOne} />
      <Button text='bad' onClick={increaseBadByOne} />
      <Header text='statics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App