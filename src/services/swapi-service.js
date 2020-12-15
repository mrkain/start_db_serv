export  default  class SwapiService {

  _apiBase = 'https://swapi.dev/api'

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`)
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
    }
    return await res.json()
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`)
    return res.results.map(this._transformPerson)
  }
  async getPerson(id) {
    const person = await this.getResource(`/people/${id}`)
    return this._transformPerson(person)
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`)
    return res.results.map(this._transformPlanet)
  }
  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`)
    return this._transformPlanet(planet)
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`)
    return res.results.map(this._transformStarship)
  }
  getStarship(id) {
    const starship = this.getResource(`/starships/${id}`)
    return this._transformStarship(starship)
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/
    return item.url.match(idRegExp)[1]
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name:  planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      orbitalPeriod: planet.orbital_period
    }
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth,
      eyeColor: person.eyeColor
    }
  }
}







/*const swapi = new SwapiService()

swapi.getAllPeople().then((people) => {
  console.log('СПИСОК ЛЮДЕЙ')
  people.forEach((p) => {
    console.log(p.name)
  })
})

swapi.getPerson(3).then((p) => {
  console.log('ТРЕТИЙ В СПИСКЕ ЛЮДЕЙ')
  console.log(p.name)
})

swapi.getAllPlanets().then((planets) => {
  console.log('СПИСОК ПЛАНЕТ')
  planets.forEach((p) => {
    console.log(p.name)
  })
})

swapi.getPlanet(2).then((p) => {
  console.log('ВТОРАЯ В СПИСКЕ ПЛАНЕТ')
  console.log(p.name)
})

swapi.getAllStarships().then((starships) => {
  console.log('СПИСОК КОРАБЛЕЙ')
  starships.forEach((s) => {
    console.log(s.name)
  })
})

swapi.getStarship(3).then((s) => {
  console.log('ТРЕТИЙ КОРАБЛЬ В СПИСКЕ')
  console.log(s.name)
})*/

/*
fetch('https://swapi.dev/api/people/1/')
  .then((res) => {
    return res.json()
  })
  .then((body) => {
    console.log(body)
  })*/

