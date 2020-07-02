import addProperties from './addProperties';

const handleSetJokes = (obj, j, init) => {

    // was loaded before?
    if (!localStorage.getItem('state') || localStorage.getItem('state') === undefined) {

        // first load on a machine
        if (init) {
            obj.setState({
                ...obj.state,
                jokes: [...addProperties(j)],
                nextPage: obj.state.nextPage + 1,
                isLoaded: true
            }, () => { localStorage.setItem('state', JSON.stringify(obj.state)) })
        }

        // handle addJokes
        else {
            obj.setState({
                ...obj.state,
                jokes: [...obj.state.jokes, ...addProperties(j)],
                nextPage: obj.state.nextPage + 1
            }, () => { localStorage.setItem('state', JSON.stringify(obj.state)) })
        }

    }

    else {

        // initial load but was loaded before
        if (init) { obj.setState(JSON.parse(localStorage.getItem('state'))) }

        // handle addJokes
        else {
            obj.setState({
                ...obj.state,
                jokes: [...obj.state.jokes, ...addProperties(j)],
                nextPage: obj.state.nextPage + 1
            }, () => { localStorage.setItem('state', JSON.stringify(obj.state)) })
        }

    }
}

export default handleSetJokes;