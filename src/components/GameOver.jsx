import React from 'react';
import { Link } from 'react-router-dom';

class GameOver extends React.Component {

    render() {

        return(
            <div>
                <h1>Game Over.</h1>
                <form>
                    <Link to={`/`}>
                        <button type="submit">
                            Return Home
                        </button>
                    </Link>
                    <Link to={`guesswho`}>
                        <button type="submit">
                            Play Again
                        </button>
                    </Link>
                </form>       
            </div>
        )   
    }   
};

export default GameOver;