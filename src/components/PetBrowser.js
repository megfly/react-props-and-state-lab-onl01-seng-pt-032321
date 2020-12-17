import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render() {
    // receives pets props
    //console.log("this is props", this.props.pets)

    // Should receive an onAdoptPet prop. This callback prop gets passed to its <Pet /> children components.
    //<PetBrowser /> should render Pet components based on its props

    const petData = this.props.pets.map(pet => {
      console.log(pet)
      // collect the key value pairs and pass the callback prop to <pet /> children componenet
         return <Pet 
            pet={pet} 
            key={pet.id} 
            type={pet.type} 
            gender={pet.gender} 
            age={pet.age} 
            weight={pet.weight} 
            name={pet.name}

            // <PetBrowser /> should pass an `onAdoptPet` callback prop to its children Pet components:
            // receives onAdoptPet={this.handleAdoptPet} callback
            onAdoptPet={this.props.onAdoptPet}
         />
    });

    return  <div className="ui cards">PET COMPONENT SHOULD GO HERE
                {petData}
            </div>
  }
}

export default PetBrowser

