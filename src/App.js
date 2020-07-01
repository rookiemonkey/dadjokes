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
        return (

            <article className='app-parent-container'>

                <section className='app-title-container'>
                    <h1>Dad Jokes</h1>
                </section>

                <section className='app-jokes-container'>

                </section>

            </article>

        )
    }
}

export default App;
