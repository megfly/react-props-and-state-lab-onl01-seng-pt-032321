import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChangeType = (event) => {
    console.log("on change type")
    //this needs to update state.filters.type
    console.log(event.target.value)
    this.setState({ 
      filters: { 
        type: event.target.value 
      } 
    })
  }

  handleFindPetsClick = (event) => {
    //console.log("handle find pets click")
    console.log(this.state.filters.type)
    
    if (this.state.filters.type==='all') {

    fetch('/api/pets')
      .then(res => res.json())
      .then(json => {
         //console.log(json)
        this.setState({
          pets: json
      })
      }
      )
    } else { 
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res => res.json())
      .then(json => this.setState ({
        pets: json
      })
      )
    }

    
  }

  //take in an id for a pet,
  handleAdoptPet = id => {
    console.log("adoptpet")
    //debugger
     
    //find the matching pet in state.pets and set the isAdopted property to true.
     //map over this.state.pets.map array 
    let petsArray = this.state.pets.map(pet => {
      //console.log("this is handleadoptpet", pet)
 
      //if pet.id matches this id then set adopted as true
      if (pet.id === id) {
        pet.isAdopted = true 
        return pet //need to return the pet, because if we dont return it, it comes back as undefined
      } else {
        return pet // if pet.id doesnt match this id then do nothing...return the pet
      }
    }) 
          //set the new state 
          this.setState ({
            pets: petsArray
          })
  }

  render() {
    console.log(this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.handleChangeType}
                onFindPetsClick={this.handleFindPetsClick} //setting props in render
                //access value through the key
                //onFindPetsClick={} //should fetch a list of pets using fetch()
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.handleAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App