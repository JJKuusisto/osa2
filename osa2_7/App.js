import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  lisaaNimi = (event) => {
    event.preventDefault()
    if(this.state.persons.some(e => e.name === this.state.newName)){
      alert("Nimi on jo listassa")
    } else {
        const personObject = {
          name: this.state.newName
        }
    
        const persons = this.state.persons.concat(personObject)
    
        this.setState({
          persons: persons,
          newName:''
        })
      }
    
   
  }

  handleNimiChange = (event) => {
    this.setState({newName: event.target.value})
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
  persons.map(p => <p key={p.name}>{p.name}</p>)
  )
}

export default App