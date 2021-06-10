import React from 'react'
import TarjetaFruta from './components/TarjetaFruta'

const App = () => (
  <div>
    <TarjetaFruta name='Pera' price={10.00} />
    <TarjetaFruta name='Piña' price={25.00} />
    <TarjetaFruta name='Uva' price={8.00} />
  </div>
)

export default App