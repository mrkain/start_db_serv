import React, {Component} from "react";
import "./random-planet.css"

export default class RandomPlanet extends Component {
  render() {
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image" src="https://images.wallpaperscraft.ru/image/planeta_zemlia_zvezdy_133535_8000x8000.jpg"/>
        <div>
          <h4>Имя планеты</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>unknown</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>23</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>7200</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}