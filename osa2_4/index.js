import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
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
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]
  const Yhteensa = ({id}) => {
    var sisalto = kurssit.filter(k=> k.id === id)
    var k = sisalto.map(a => a.osat)
    var yhteensa = 0
    yhteensa = k[0].reduce((acc,osa) => acc + osa.tehtavia ,0)
    console.log(yhteensa)
    return (
      <p>Yhteensa {yhteensa} tehtävää</p>
    )
  }
  const Osa = ({osa}) => {
    return(
      <p>{osa.nimi} {osa.tehtavia}</p>
    )
  }
  
  const Sisalto = ({id}) => {
    var sisalto = kurssit.filter(k=> k.id === id)
    var k = sisalto.map(a => a.osat)
    return (
      <div>
      {k[0].map(osa=><Osa key={osa.id} osa={osa} />)}
      </div>
    )
  }
    
  
  const Otsikko = ({id}) => {
    var sisalto = kurssit.filter(k => k.id === id)
    return (
     <h1>
       {sisalto.map(s => s.nimi)}
     </h1>
    )
  }

  const Kurssi = ({id}) => {
    return (
      <div>
      {console.log(kurssit.length)}
      <Otsikko id={id}/>
      <Sisalto id={id}/>
      <Yhteensa id={id} />
      </div>
    )
  }

  
 

  return (
    <div>
    {kurssit.map(k=> <Kurssi key={k.id} id={k.id}/>)}
    </div>
  )
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)
  




