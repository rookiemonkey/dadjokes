import React, { Component } from 'react';
import evalVote from '../helpers/evalVote';
import renderButton from '../helpers/renderButton';

class Joke extends Component {

    handleLike = () => { this.props.like(this.props.id) };
    handleDislike = () => { this.props.dislike(this.props.id) }

    render() {

        const { joke, votes } = this.props

        return (

            <div className='Joke Joke-text'>
                {renderButton('', require('../icons/like.png'), 'like', this.handleLike)}
                <span className='Joke-votes'>{votes}</span>
                {renderButton('', require('../icons/dislike.png'), 'dislike', this.handleDislike)}
                {joke}
                {evalVote(votes)}
            </div>

        )
    }
}

export default Joke;