import React, { Component } from 'react';
import './App.css';
import QueryApp from './QueryApp'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Formik, Field, Form, useField, FieldArray } from "formik"
import {TextField, Button} from "@material-ui/core"
import { JsonWebTokenError } from 'jsonwebtoken';
import * as yup from 'yup'
import axios from 'axios';


const validationSchema = yup.object({
  name: yup.string().required()
})

const MyTextField = ({placeholder,...props}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched? meta.error: ''

  return(
    <TextField
     placeholder={"Query name"}
     {...field}
     helperText={errorText}
     error={!!errorText}/>
  )
}

var strr=[];
function myArr(){
  
  // const arr = []
  // axios.get('http://localhost:5000/api/query/view')
  // .then(res=> {return arr= res.data.data})

  // console.log(arr)
  // return arr
 // var strr = [];
  axios.get('http://localhost:5000/api/query/view')
   .then(res=> {strr.push(res.data.data[0])})
//   axios.get('http://localhost:5000/api/query/view')
//  .then(function(response){
//          strr.push(response.data.data);
//   })


  .catch(function(error){
         console.log(error);
     });
     console.log(strr)
  return strr;
} 
var aa = myArr()
 

function App() {
  
  return (
  <Formik
  validateOnChange = {true}
   initialValues = {{
     name: "",
     array: strr
    }}
   validationSchema = {validationSchema}
   onSubmit={(data, {setSubmitting})=>{
     setSubmitting(true)
     //async call
  //    preventDefault();
  //  if(!this.state.userName||(this.state.userName.length<3)||!this.state.name||!this.state.password||(this.state.password.length<8)||!this.state.email)
  //  alert('validations not satisfied,try again!')
  //  else
  //  this.addEduOrg(this.state.userName,this.state.name,this.state.password,this.state.email);
     console.log('submit:',data)
    setSubmitting(false)
  }}
  >
    {({values, isSubmitting})=>(
      <Form>
        <MyTextField
        placeholder = "Query name"
        name="name"
        type="input"
        />
        <div>
        <Button disabled = {isSubmitting} type="submit">Submit</Button>
        </div>
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </Form>
  )}
  </Formik>
    // <Router>
    //   <div className="App">
    //    <Route exact path = "/Queries" component = {QueryApp}/>
    //   </div>
    // </Router>
  );
}

export default App;
