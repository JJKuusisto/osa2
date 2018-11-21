import React from 'react';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: ''
    }
  }

  componentDidMount(){
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        this.setState({countries: response.data})
      })
  }
  filtering() {
    var filtered = this.state.countries.filter(p => p.name.toLowerCase().includes(this.state.filter.toLowerCase()))
      return (
        filtered
      )
  }

  handleFilterChange = (event) => {
    this.setState({filter: event.target.value})
  }

  render (){
    return (
      <div>
        find countries:<input onChange={this.handleFilterChange}/>
        <Suodatetut countries={this.filtering()} />
      </div>
    )
  }

}

const Suodatetut = ({countries}) => {
  if(countries.length < 10 && countries.length > 1){
    return(
      <div>
        {countries.map(c => <p key={c.name}>{c.name}</p>)}
      </div>
    ) } else if(countries.length > 9) {
      return (
        <div>
          <p>too many matches, specify another filter</p>
        </div>
      )
    } else if(countries.length === 0) {
      return (
        <div>
          <p>No matches</p>
        </div>
      )
    } else {
      return (
        <div>
          <h1>{countries[0].name} {countries[0].nativeName}</h1>
          <p>capital: {countries[0].capital}</p>
          <p>population: {countries[0].population}</p>
          <img src={countries[0].flag} width="400" />
        </div>
      )
    }
  }


export default App