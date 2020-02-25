import React, { Component } from 'react';

class QueryItem extends Component {
  
  
  render() {
      const {_id,name,components} = this.props.query
    return(
        <div>
            <p>Name: {name}</p>
            
            {/* <button onClick={this.props.reserveParkingSpot.bind(this,_id,status)} style={btnStyle}>park</button>
            <button onClick={this.props.unreserveParkingSpot.bind(this,_id,status,email)} style={btnStyle}>leave</button> */}
        </div>
    )

    
   
  }
  
}
// const btnStyle={
//     color: 'white',
//     background:'purple',
//     fontSize: 20,
//     borderColor: 'grey',
//     borderWidth: 3,
//     borderRadius:'70%',
//     cursor:'pointer'
//     // float:'down-right'
//   }

export default QueryItem;
