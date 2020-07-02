const setJokes = obj => {
    return fetch(`https://icanhazdadjoke.com/search?page=${obj.state.nextPage}`, {
        headers: { 'Accept': 'application/json' }
    })
        .then(r => { return r.json() })
        .then(j => { return j.results })
        .catch(e => { obj.setState({ ...obj.state, error: e.message }) })
}

export default setJokes;