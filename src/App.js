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

    async componentDidMount() {
        const e = await setJokes(this)
        if(e) { this.setState({ ...this.state, error: e.message }, ()=>{ console.error(e.message) }) }
    }

    render() {
        return null
    }
}

export default App;
