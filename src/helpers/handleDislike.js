const handleDislike = (obj, id) => {
    const u = obj.state.jokes.map (j => {
        if (j.id === id) { j.dislikes = j.dislikes + 1; return j }
        else { return j }
    })
    obj.setState({ ...obj.state, jokes: u }, ()=> {console.log(obj.state)})
}

export default handleDislike;