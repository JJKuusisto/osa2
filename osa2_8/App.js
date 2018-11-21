import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas',
          number: '040-1234557' }
      ],
      newName: '',
      newNumber: ''
    }
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
    
        const persons = this.state.persons.concat(personObject)
    
        this.setState({
          persons: persons,
          newName:'',
          newNumber: ''
        })
      }
    
   
  }

  handleNimiChange = (event) => {
    this.setState({newName: event.target.value})
  }

  handleNumeroChange = (event) => {
    this.setState({newNumber: event.target.value})
  }

  

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.lisaaNimi}>
          <div>
            nimi: <input 
            value={this.state.newName}
            onChange={this.handleNimiChange}
             />
          </div>
          <div>
            numero: <input 
            value={this.state.newNumber}
            onChange={this.handleNumeroChange}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <Numerot persons={this.state.persons} />
      </div>
    )
  }
}

const Numerot = ({persons}) => {
  return (
  persons.map(p => <p key={p.name}>{p.name} {p.number}</p>)
  )
}

export default App