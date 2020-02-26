import React, { Component } from 'react';
import '../App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Formik, Field, Form, useField, FieldArray } from "formik"
import {TextField, Button} from "@material-ui/core"
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

  axios.get('http://localhost:5000/api/product/view')
   .then(res=> {
       for(let i=0;i<2;i++){
        strr.push(res.data.data[i].product_type)  
       }
       })
  .catch(function(error){
         console.log(error);
     });
     console.log(strr)
  return strr;
} 
var aa = myArr()
 

function Formm() {
  return (
  <Formik
  validateOnChange = {true}
   initialValues = {{
     name: "",
     product_types: strr,
    }}
   validationSchema = {validationSchema}
   onSubmit={(data, {setSubmitting})=>{
     setSubmitting(true)
     const name = data.name
     const product_types =data.product_types
     axios.post('http://localhost:5000/api/query/create', {name, product_types })
     .then((result) => {
       console.log(result)
     });      
   //  this.props.history.push('/queries')
  //   history.push('/queries');
      console.log('submit:',data.name)
      alert("Query created successfuly kindly check: http://localhost:3000/queries");
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
        
        <FieldArray
            name="product_types"
            render={arrayHelpers => (
              <div>
                {values.product_types && values.product_types.length > 0 ? (
                  values.product_types.map((product, index) => (
                    <div key={index}>
                      <Field name={`product_types.${index}`} />
                      <Button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} 
                      >
                        REMOVE
                      </Button>
                      <Button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, '')} 
                      >
                        ADD
                      </Button>
                    </div>
                  ))
                ) : (
                <p>Insert Query name to choose products</p>
                )}
                
              </div>
            )}
          />
        <div>
        <p>removing products can't be undone</p>
        </div>
        <div>
        <Button disabled = {isSubmitting} type="submit">Submit</Button>
        </div>
      </Form>
  )}
  </Formik>
  );
}

export default Formm;
