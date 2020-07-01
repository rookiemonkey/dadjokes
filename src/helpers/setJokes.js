const setJokes = obj => {
    return fetch('https://icanhazdadjoke.com/search?limit=10', {
        headers: { 'Accept': 'application/json' }
    })
        .then(r => { return r.json() })
        .then(j => { obj.setState(st => { st.jokes = [...j.results] })})
        .catch(e => { obj.setState({ ...obj.state, error: e.message })})
}

export default setJokes;