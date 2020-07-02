import React from 'react';
import Joke from '../components/Joke';

const renderJokes = (arr, like, dislike) => {

    return arr.map(j => {

        return  <Joke
                    key={j.id}
                    id={j.id}
                    joke={j.joke}
                    dislikes={j.dislikes}
                    likes={j.likes}
                    votes={j.votes}
                    like={like}
                    dislike={dislike}
                />

    })
}

export default renderJokes;