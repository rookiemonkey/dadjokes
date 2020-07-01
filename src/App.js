import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jokes: []
        }
    }

    async componentDidMount() {
        fetch('https://icanhazdadjoke.com/search?limit=10', {
            headers: { 'Accept': 'application/json' }
        })
            .then(r => { return r.json() })
            .then(j => { this.setState(st => { st.jokes = [...j.results] })})
            .catch(e => { return new Error(`Error upon fetching 10 jokes ${e}`) })
    }

    render() {
        return null
    }
}

export default App;
