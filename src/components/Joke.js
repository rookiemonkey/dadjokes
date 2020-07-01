import React, { Component } from 'react';

class Joke extends Component {

    render() {

        const { joke, likes, dislikes } = this.props
        const vote = likes - dislikes;

        return (

            <div

            >Likes:{likes} Vote:{vote} Dislikes:{dislikes} Joke:{joke}</div>

        )
    }
}

export default Joke;