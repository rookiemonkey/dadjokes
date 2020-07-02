const handleLike = (obj, id) => {
    const u = obj.state.jokes.map(j => {
        if (j.id === id) {
            j.likes = j.likes + 1;
            j.votes = j.votes + 1;
            return j
        }
        else { return j }
    })
    obj.setState({ ...obj.state, jokes: u })
}

export default handleLike;