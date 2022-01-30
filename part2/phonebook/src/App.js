import React, { useState } from 'react'
//import { areTheseObjectsEqual } from './Equal'

const Filter = ({ filterStr, onChange }) => {
  return (
    <div>
      filter shown with: <input value={filterStr}
        onChange={onChange}
      />
    </div>
  )
}

const Person = ({ person }) => {
  return (
    <li >{person.name} {person.number}</li>
  )
}

const Persons = ({ persons }) => {
  return (
    persons.map(person => <Person key={person.name} person={person} />)
  )
}

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    const index = persons.findIndex(person => person.name === newName)
    if (index !== -1) {
      const msg = `${newPerson.name} is already added to phonebook`
      window.alert(msg)
      return
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        number: <input value={newNumber}
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [filterStr, setFilterStr] = useState('')

  
  const handleFilterStrChange = (event) => {
    setFilterStr(event.target.value)
  }

  const personsToShow = (filterStr === '')
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterStr.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterStr={filterStr} onChange={handleFilterStrChange} />
      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App
