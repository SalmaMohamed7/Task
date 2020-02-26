import React, { Component } from 'react';
import './App.css';
import QueryApp from './QueryApp'
import Formm from './components/Form'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Formik, Field, Form, useField, FieldArray } from "formik"
import {TextField, Button} from "@material-ui/core"
import { JsonWebTokenError } from 'jsonwebtoken';
import * as yup from 'yup'
import axios from 'axios';
import {Switch} from 'react-router-dom';


class App extends React.Component {
    render() {
        return (
          <Router>
          <Switch>
            <Route exact path='/queries' component={QueryApp} />
            <Route path='/' component={Formm} />
          </Switch>

          </Router>
        )
    }
}

export default App; 