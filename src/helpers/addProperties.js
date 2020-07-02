const addProperties = arr => {
    return arr.map(j => {
        j.likes = 0;
        j.dislikes = 0;
        j.votes = 0;
        return j;
    })
}

export default addProperties;