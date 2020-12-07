class SwapiService {

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
    return res.results
  }
  getPerson(id) {
    return this.getResource(`/people/${id}`)
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`)
    return res.results
  }
  getPlanet(id) {
    return this.getResource(`/planets/${id}`)
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`)
    return res.results
  }
  getStarship(id) {
    return this.getResource(`/starships/${id}`)
  }

}

const swapi = new SwapiService()

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
})


/*
fetch('https://swapi.dev/api/people/1/')
  .then((res) => {
    return res.json()
  })
  .then((body) => {
    console.log(body)
  })*/

export default