import React from 'react';
import { Link } from 'react-router-dom';

class GameOver extends React.Component {

    render() {

        return(
            <div>
                <h1>Game Over.</h1>
                <form>
                <button type="submit">
                    <Link to={`/`}>
                    Return Home
                    </Link>
                </button>
                <button type="submit">
                    <Link to={`guesswho`}>
                    Play Again
                    </Link>
                </button>
                </form>       
            </div>
        )   
    }   
};

export default GameOver;