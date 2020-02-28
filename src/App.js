import React, { Component } from 'react'
import "./App.scss";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Views/Login';
import Storage from './Storage';
import {Provider} from 'react-redux';
import Landing from './Views/Landing';
import NotFound from './Views/NotFound';
import AddItem from './Views/AddItem';

function App() {
    return (
      <Provider store={Storage}>
        <div className="App">
          <Router>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/landing" exact component={Landing} />
              <Route path="/notfound" exact component={NotFound} />
              <Route path="/additem" exact component={AddItem} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
}

export default App;
