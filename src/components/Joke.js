import React, { Component } from 'react';
import renderButton from '../helpers/renderButton';

class Joke extends Component {

    handleLike = () => { this.props.like(this.props.id) };
    handleDislike = () => { this.props.dislike(this.props.id) }

    render() {

        const { joke, likes, dislikes } = this.props
        const vote = likes - dislikes;

        return (

            <div>
                { renderButton('', require('../icons/like.png'), this.handleLike) }
                Vote:{vote}
                { renderButton('', require('../icons/dislike.png'), this.handleDislike) }
                Joke:{joke}
            </div>

        )
    }
}

export default Joke;