import React from 'react'
import Kurssi from './components/Kurssi'

const App = ({kurssit}) => {

    return (
        <div>
        {kurssit.map(k=> <Kurssi key={k.id} id={k.id}/>)}
        </div>
      )
}

  export default App