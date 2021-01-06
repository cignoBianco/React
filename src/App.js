import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './components/Home'
import NotFound from './components/NotFound'
import DeseaseContainer from './components/DeseaseContainer'
import Desease from './components/Desease'
import CreateNewDesease from './components/forms/desease.form'
import EditDesease from './components/forms/edit-desease'
import CreateNewSymptom from './components/forms/symptoms.form'
import SymptomsContainer from './components/SymptomsContainer'
import Symptom from './components/Symptom'
//CreateNewDesease
function App() {
  return (
    <div className="App">
      <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/deseases' component={DeseaseContainer} />
          <Route exact path='/new-desease' component={CreateNewDesease} />
          <Route exact path='/edit-desease/:id' component={EditDesease} />
          <Route exact path='/new-symptom' component={CreateNewSymptom} />
          <Route exact path='/deseases/:id' component={Desease} />
          <Route exact path='/symptoms' component={SymptomsContainer} />
          <Route exact path='/symptoms/:id' component={Symptom} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Fragment>
    </div>
  );
}

export default App;
