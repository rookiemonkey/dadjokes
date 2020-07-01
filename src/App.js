import React, { Component } from 'react';
import setJokes from './helpers/setJokes';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jokes: [],
            error: ''
        }
    }

    async componentDidMount() { await setJokes(this) }

    render() {
        return null
    }
}

export default App;
