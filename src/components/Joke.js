import React, { Component } from 'react';
import evalVote from '../helpers/evalVote';
import renderButton from '../helpers/renderButton';
import setColor from '../helpers/setColor';

class Joke extends Component {

    handleLike = () => { this.props.like(this.props.id) };
    handleDislike = () => { this.props.dislike(this.props.id) }

    render() {

        const { joke, votes } = this.props
        const b = { border: `5px solid ${setColor(votes)}` }

        return (

            <div className='Joke'>

                <div className='Joke-button-container'>
                    {renderButton('', require('../assets/icons/like.png'), 'like', this.handleLike)}

                    <span className='Joke-votes' style={b} >{votes}</span>

                    {renderButton('', require('../assets/icons/dislike.png'), 'dislike', this.handleDislike)}
                </div>


                <p className='Joke-text'>{joke}</p>

                {evalVote(votes)}

            </div>

        )
    }
}

export default Joke;