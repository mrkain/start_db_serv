import React, {Component} from "react";
import "./random-planet.css"

export default class RandomPlanet extends Component {
  render() {
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image" src="https://starwars-visualguide.com/assets/img/planets/8.jpg"/>
        <div>
          <h4>Naboo</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>4,500,000,000</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>26 days</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>12,120km</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}