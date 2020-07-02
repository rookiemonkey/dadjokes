import addProperties from './addProperties';

const handleSetJokes = (obj, j, init) => {
    if (init) {
        obj.setState({
            ...obj.state,
            jokes: [...addProperties(j)],
            nextPage: obj.state.nextPage + 1,
            isLoaded: true
        })
    }

    else {
        obj.setState({
            ...obj.state,
            jokes: [...obj.state.jokes, ...addProperties(j)],
            nextPage: obj.state.nextPage + 1
        })
    }
}

export default handleSetJokes;