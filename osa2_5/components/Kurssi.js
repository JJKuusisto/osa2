import React from 'react'
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

const Yhteensa = ({kurssi, id}) => {
    
  var sisalto = kurssi.filter(k=> k.id === id)
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

const Sisalto = ({kurssi, id}) => {
  var sisalto = kurssi.filter(k=> k.id === id)
  var k = sisalto.map(a => a.osat)
  return (
    <div>
    {k[0].map(osa=><Osa key={osa.id} osa={osa} />)}
    </div>
  )
}
  

const Otsikko = ({kurssi, id}) => {
  var sisalto = kurssi.filter(k=> k.id === id)
  return (
   <h1>
    {sisalto.map(s => s.nimi)}
   </h1>
  )
}

const Kurssi =({kurssi, id}) => {
  return(
  <div>
  <Otsikko kurssi={kurssit} id={id} />
  <Sisalto kurssi={kurssit} id={id} />
  <Yhteensa kurssi={kurssit} id={id} />
  </div>
  )
}

  export default Kurssi