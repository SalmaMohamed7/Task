import React, { Component } from 'react';
import Queries from './components/Queries';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class QueryApp extends Component {

  constructor(props){
    super(props)
    this.state={
      queries:[],
      error:false,
      loading:true
    }
  }
  componentDidMount() {
    axios
    .get('http://localhost:5000/api/query/view')
    .then(res=> this.setState({queries:res.data.data,loading:false}))
    .catch(error=> this.ERROR.bind(error))

  } 
  render() {
    return this.state.error?<h1>process could not be complete</h1>:this.state.loading?
    <div class="text-center">
    <br></br><br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
</div>
  
  :(
      <div>
        <h1>Queries</h1>
        <br></br>
        <Queries queries = {this.state.queries}/>
        {/* // reserveParkingSpot={this.reserveParkingSpot}
        // unreserveParkingSpot={this.unreserveParkingSpot}/> */}
      </div>
    );
  }
  ERROR=(error)=>{
    console.log(error)
    this.setState({error:true})
  }
}


export default QueryApp;