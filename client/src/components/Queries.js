import React, { Component } from 'react';
import QueryItem from './QueryItem';
import axios from 'axios';

class Queries extends Component {

  state = {
        id: null,
        name: null,
        components: null
        
      }
  getQueries = () => {
    axios.get('http://localhost:5000/api/query/view')
    .then(res => this.setState({queries:[...this.state.Queries,res.data]}))
  }
  render() {
    return (
    <div>
    {this.props.queries.map((query) => (
      <QueryItem key = {query._id} query = {query}
    //   reserveParkingSpot={this.props.reserveParkingSpot}
    //   unreserveParkingSpot={this.props.unreserveParkingSpot}
      />

    ))}
        

    </div>)
  }
}
export default Queries;