import React, { Component } from 'react';
import Loader from './components/Loader';
import handleSetJokes from './helpers/handleSetJokes';
import handleLike from './helpers/handleLike';
import handleDislike from './helpers/handleDislike';
import renderJokes from './helpers/renderJokes';
import setJokes from './helpers/setJokes';

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

    componentDidUpdate() { if (!this.state.error) { localStorage.setItem('state', JSON.stringify(this.state)) } }

    addJokes = async () => {
        await setJokes(this)
            .then(j => { handleSetJokes(this, j, false) })
            .catch(e => { console.error(this.state.error) })
    };

    like = id => { handleLike(this, id) };

    dislike = id => { handleDislike(this, id); };

    render() {

        const overFlow = { overflowY: this.state.isLoaded ? 'scroll' : 'hidden' }

        return (

            <article className='app-parent-container'>

                <section className='container container-custom'>

                    <div className='row app-jokes-list-conainter'>
                        <div className='app-title-container col-sm-12 col-md-12 col-lg-4'>
                            <h1 className='JokeList-title'><span>Dad</span> Jokes</h1>
                            <img className='JokeList-title-image' alt='' src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
                            {this.state.error ? <p className="JokeList-title-error">{this.state.error}</p> : null}
                            {
                                this.state.isLoaded && !this.state.error
                                    ? <button onClick={this.addJokes} className='JokeList-getmore'>Add Jokes</button>
                                    : null
                            }
                        </div>

                        <div className='app-jokes-container col-sm-12 col-md-12 col-lg-8' style={overFlow}>
                            {
                                this.state.isLoaded
                                    ? renderJokes(this.state.jokes, this.like, this.dislike)
                                    : <Loader />
                            }
                        </div>
                    </div>

                </section>

            </article>

        )
    }
}

export default App;