import React from 'react';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: '',
      valittu: ''
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
    this.setState({valittu: ''})
    this.setState({filter: event.target.value})
  }

  countryOnClick = (name) => {
    var country = this.state.countries.filter(cty => cty.name === name)
    this.setState({valittu:country})
  }

  render (){
    if(this.state.valittu === ''){
      return (
        <div>
          find countries:<input onChange={this.handleFilterChange}/>
          <Suodatetut countries={this.filtering()} onClick={this.countryOnClick} />
        </div>
    )
    } else {
      return (
        <div>
          find countries:<input onChange={this.handleFilterChange}/>
          <h1>{this.state.valittu[0].name} {this.state.valittu[0].nativeName}</h1>
          <p>capital: {this.state.valittu[0].capital}</p>
          <p>population: {this.state.valittu[0].population}</p>
          <img src={this.state.valittu[0].flag} width="400" alt={this.state.valittu[0].name}/>
        </div>
      )
    }
  }

}

const Suodatetut = ({countries, onClick}) => {
  
  if(countries.length < 10 && countries.length > 1){
    return(
      <div>
        {countries.map(c => <p onClick={() => onClick(c.name)} value={c.name} key={c.name}>{c.name}</p>)}
        
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
          <img src={countries[0].flag} width="400" alt={this.state.valittu[0].name}/>
        </div>
      )
    }
  }


export default App