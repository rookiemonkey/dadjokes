import React, { Component } from 'react';

class Joke extends Component {

    handleLike = () => { this.props.like(this.props.id) };
    handleDislike = () => { this.props.dislike(this.props.id) }

    render() {

        const { joke, likes, dislikes } = this.props
        const vote = likes - dislikes;

        return (

            <div>
                <button onClick={this.handleLike} ><img src={require('../icons/like.png')} alt='like'/></button>
                Vote:{vote}
                <button onClick={this.handleDislike} ><img src={require('../icons/dislike.png')} alt='dislike'/></button>
                Joke:{joke}
            </div>

        )
    }
}

export default Joke;