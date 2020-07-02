import React, { Component } from 'react';
import handleSetJokes from './helpers/handleSetJokes';
import handleLike from './helpers/handleLike';
import handleDislike from './helpers/handleDislike';
import renderJokes from './helpers/renderJokes';
import renderButton from './helpers/renderButton';
import setJokes from './helpers/setJokes';
import addProperties from './helpers/addProperties';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            nextPage: 1,
            jokes: [],
            error: ''
        }
    }

    async componentDidMount() {
        await setJokes(this)
            .then(j => { handleSetJokes(this, j, true) })
            .catch(e => { console.error(this.state.error) })
    };

    addJokes = async () => {
        await setJokes(this)
            .then(j => { handleSetJokes(this, j, false) })
            .catch(e => { console.error(this.state.error) })
    };

    like = id => { handleLike(this, id) };

    dislike = id => { handleDislike(this, id); };

    render() {
        return (

            <article className='app-parent-container'>

                <section className='app-title-container'>
                    <h1>Dad Jokes</h1>
                    {this.state.error ? this.state.error : null}
                    {renderButton('Add Jokes', null, null, this.addJokes)}
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