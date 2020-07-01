import React from 'react';
import Joke from '../components/Joke';

const renderJokes = arr => {

    return arr.map(j => {

        console.log(j)

        return  <Joke />

    })
}

export default renderJokes;