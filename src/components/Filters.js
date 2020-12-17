import React from 'react'

class Filters extends React.Component {
  constructor(props) {
    super(props)
    //console.log(props)
  }
  render() {
    //debugger
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.props.onChangeType}> 
          {/*  */}
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          {/* onclick is being passed props from app in order to have access to the handlepetsclick function- 
           this function fetches and filters the pets */}
                {/* Should receive an onChangeType callback prop. This callback prop gets called 
                whenever the value of the <select> element changes with the value of the <select>  */}
           {/* receives onfindpetsclick callback prop. this callback prop gets called when users clicks find pets button */}
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
