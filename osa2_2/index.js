import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      },
      {
        nimi: 'Redux',
        tehtavia: 8,
        id: 4
      }
    ]
  }
  const Yhteensa = ({kurssi}) => {
    var yhteensa = 0
    kurssi.osat.map(osa=>yhteensa += osa.tehtavia)
    return (
      <p>Yhteensa {yhteensa} tehtävää</p>
    )
  }
  const Osa = ({osa}) => {
    return(
      <p>{osa.nimi} {osa.tehtavia}</p>
    )
  }
  
  const Sisalto = ({kurssi}) => {
    return (
      <div>
        {kurssi.osat.map(osa=><Osa key={osa.id} osa={osa} />)}
      </div>
    )
  }
    
  
  const Otsikko = ({kurssi}) => {
    return (
     <h1>{kurssi.nimi}</h1> 
    )
  }

  const Kurssi = ({kurssi}) => {
    return (
      <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto kurssi={kurssi}/>
      <Yhteensa kurssi={kurssi} />
      </div>
    )
  }

  
 

  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)
  




