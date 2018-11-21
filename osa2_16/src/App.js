import React from 'react';
import personService from './services/persons'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentDidMount(){
    personService
      .getAll()
      .then(response=> {
        console.log(response)
        this.setState({persons: response})
      })
  }

  lisaaNimi = (event) => {
    event.preventDefault()
    if(this.state.persons.some(e => e.name === this.state.newName)){
      alert("Nimi on jo listassa")
    } else {
        const personObject = {
          name: this.state.newName,
          number: this.state.newNumber
        }
    
        personService
          .create(personObject)
          .then(newPerson =>{
            this.setState({
              persons: this.state.persons.concat(newPerson),
              newName: '',
              newNumber: ''
            })
          })
      }
    
   
  }

  handleNimiChange = (event) => {
    this.setState({newName: event.target.value})
  }

  handleNumeroChange = (event) => {
    this.setState({newNumber: event.target.value})
  }

  filtering () {
    var valitut = this.state.persons.filter(p => p.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    return (
      valitut
    )
  }

  handleFilterChange = (event) => {
    this.setState({filter: event.target.value})
    }
  
  deletePerson = (id) => {
    return () => {
      if(window.confirm("Haluatko varmasti poistaa numeron?")){
        personService
          .remove(id)
          this.setState({persons: this.state.persons.filter(p => p.id !== id)})
      }
    }

  
  }

  

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <div>
            rajaa näytettäviä: <input 
            value={this.state.filter}
            onChange={this.handleFilterChange}
            />
          </div>
        
        <UusiKayttaja kayttaja={this}/>
        <Numerot persons={this.state.persons} deletePerson={this.deletePerson} />
      </div>
    )
  }
}

const Numerot = ({persons, deletePerson}) => {
  return (
    <div>
      <h2>Numerot</h2>
      {persons.map(p => 
        <Person 
          key={p.id}
          person={p}
          deletePerson={deletePerson(p.id)}
        />
      )}
    </div>
  )
}

const Person = ({person, deletePerson}) => {
  return (
    <div>
      {person.name} {person.number} <button onClick={deletePerson}>poista</button>
    </div>
  )
}

const UusiKayttaja = ({kayttaja}) => {
  return (
    <div>
      <form onSubmit={kayttaja.lisaaNimi}>
         
         <h2>Lisää uusi</h2>
         <div>
           nimi: <input 
           value={kayttaja.state.newName}
           onChange={kayttaja.handleNimiChange}
            />
         </div>
         <div>
           numero: <input 
           value={kayttaja.state.newNumber}
           onChange={kayttaja.handleNumeroChange}
           />
         </div>
         <div>
           <button type="submit">lisää</button>
         </div>
       </form>
    </div>
  )
}

export default App