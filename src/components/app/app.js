import React from 'react'
import './app.css'
import Header from "../header";
import RandomPlanet from "../random-planet"
import ItemList from "../item-list";
import PersonDetails from "../person-details";


const App = () => {
  return (
      <div>
        <Header />
        <RandomPlanet />
        <div>
          <ItemList />
          <PersonDetails />
        </div>
      </div>

  )
}

export default App