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
                    like={like}
                    dislike={dislike}
                />

    })
}

export default renderJokes;