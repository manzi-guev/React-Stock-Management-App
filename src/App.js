import React, { Component } from 'react'
import Form from './components/Form';
import "./App.scss";

class App extends Component {
    render() {
        return (
            <div>
                <h1>STOCK MANAGEMENT REACT APP</h1>
                <Form />
            </div>
        )
    }
}

export default App;
