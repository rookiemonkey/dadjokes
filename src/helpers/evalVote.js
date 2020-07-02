import React from 'react';

const evalVote = v => {
    if (v < -16) { return <span role="img" aria-label="vomitting face" className='Joke-smiley'>🤮</span> }
    else if (v > -17 && v < -13) { return <span role="img" aria-label="nauseated face" className='Joke-smiley'>🤢</span> }
    else if (v > -14 && v < -10) { return <span role="img" aria-label="unamused face" className='Joke-smiley'>😒</span> }
    else if (v > -11 && v < -7) { return <span role="img" aria-label="face with eyes rolling" className='Joke-smiley'>🙄</span> }
    else if (v > -8 && v < -4) { return <span role="img" aria-label="expressionless face" className='Joke-smiley'>😑</span> }
    else if (v > -5 && v < 0) { return <span role="img" aria-label="neutral face" className='Joke-smiley'>😐</span> }
    else if (v > -1 && v < 3) { return <span role="img" aria-label="smiling face" className='Joke-smiley'>🙂</span> }
    else if (v > 2 && v < 6) { return <span role="img" aria-label="smiling face with smiling eyes" className='Joke-smiley'>😊</span> }
    else if (v > 5 && v < 9) { return <span role="img" aria-label="grinning face with smiling eyes" className='Joke-smiley'>😄</span> }
    else if (v > 8 && v < 12) { return <span role="img" aria-label="grinning squinting face" className='Joke-smiley'>😆</span> }
    else if (v > 11 && v < 16) { return <span role="img" aria-label="face with tears of joy" className='Joke-smiley'>😂</span> }
    else if (v > 15) { return <span role="img" aria-label="rolling on the floor laughing" className='Joke-smiley'>🤣</span> }

}

export default evalVote;