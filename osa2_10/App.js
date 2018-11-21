import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
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

  filtering () {
    var valitut = this.state.persons.filter(p => p.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    return (
      valitut
    )
  }

  handleFilterChange = (event) => {
    this.setState({filter: event.target.value})
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
        <Numerot persons={this.filtering()} />
      </div>
    )
  }
}

const Numerot = ({persons}) => {
  return (
    <div>
      <h2>Numerot</h2>
      {persons.map(p => <p key={p.name}>{p.name} {p.number}</p>)}
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