import React, { Component } from 'react';
import renderJokes from './helpers/renderJokes';
import setJokes from './helpers/setJokes';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            jokes: [],
            error: ''
        }
    }

    async componentDidMount() {
        await setJokes(this).then(() => { this.setState({ ...this.state, isLoaded: true }) })
    }

    render() {
        return (

            <article className='app-parent-container'>

                <section className='app-title-container'>
                    <h1>Dad Jokes</h1>
                </section>

                <section className='app-jokes-container'>
                    {
                        this.state.isLoaded
                            ? renderJokes(this.state.jokes)
                            : null
                    }
                </section>

            </article>

        )
    }
}

export default App;