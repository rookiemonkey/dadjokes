import React, { Component } from 'react';
import evalVote from '../helpers/evalVote';
import renderButton from '../helpers/renderButton';

class Joke extends Component {

    handleLike = () => { this.props.like(this.props.id) };
    handleDislike = () => { this.props.dislike(this.props.id) }

    render() {

        const { joke, votes } = this.props

        return (

            <div className='Joke'>
                {renderButton('', require('../icons/like.png'), 'like', this.handleLike)}
                <span className='Joke-votes'>{votes}</span>
                {renderButton('', require('../icons/dislike.png'), 'dislike', this.handleDislike)}
                <p className='Joke-text'>{joke}</p>
                {evalVote(votes)}
            </div>

        )
    }
}

export default Joke;