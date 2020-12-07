import React from 'react'
import './app.css'
import Header from "../header";
import RandomPlanet from "../random-planet"
import ItemList from "../item-list";


const App = () => {
  return (
      <div>
        <Header />
        <RandomPlanet />
        <div>
          <ItemList />
        </div>
      </div>

  )
}

export default App