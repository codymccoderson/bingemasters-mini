import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {

    render() {

        return(
            <div>
                <h1>Bingemasters</h1>
                <button type="submit">
                    <Link to={`guesswho`}>
                    Start Game
                    </Link>
                </button>
            </div>
        )   
    }   
};

export default HomePage;