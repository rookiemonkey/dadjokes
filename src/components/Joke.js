import React, { Component } from 'react';

class Joke extends Component {

    render() {

        const { joke, likes, dislikes } = this.props

        return (

            <div

            >{joke}</div>

        )
    }
}

export default Joke;