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

    like = id => {
        const u = this.state.jokes.map (j => {
            if (j.id === id) { j.likes = j.likes + 1; return j }
            else { return j }
        })
        console.log('UDPATED LIKES', u)
    };

    dislike = id => {
        const u = this.state.jokes.map (j => {
            if (j.id === id) { j.dislikes = j.dislikes + 1; return j }
            else { return j }
        })
        console.log('UDPATED LIKES', u)
    };

    render() {
        return (

            <article className='app-parent-container'>

                <section className='app-title-container'>
                    <h1>Dad Jokes</h1>
                </section>

                <section className='app-jokes-container'>
                    {
                        this.state.isLoaded
                            ? renderJokes(this.state.jokes, this.like, this.dislike)
                            : null
                    }
                </section>

            </article>

        )
    }
}

export default App;