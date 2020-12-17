import React from 'react'

class Pet extends React.Component {
 
  render() {
    console.log("this is Pet Comp", this.props)
    //Based on the pet's gender, the component also needs to contain either a male (♂) or female (♀) symbol.

//debugger
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {/* conditional operator condition ? true : false */}
            {this.props.pet.gender === 'female' ? '♀' : '♂'} 
            PET NAME: {this.props.pet.name}
          </a>
          <div className="meta">

            <span className="date">
              PET TYPE: {this.props.pet.type}
            </span>
          </div>

          <div className="description">
            <p>Age: {this.props.pet.age} </p>
            <p>Weight: {this.props.pet.weight} </p>
          </div>

        </div>
        <div className="extra content">

        {/* conditional operator condition ? true : false */} 

        {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
            // onclick anonymous function passed to adopt pet handler function prop, with this pet id being passed in 
              onClick={() => this.props.onAdoptPet(this.props.pet.id)}
              className="ui primary button">
              Adopt pet
            </button>)
  }
        </div>
      </div>
    )
  }
}

export default Pet

