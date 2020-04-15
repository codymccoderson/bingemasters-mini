import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {

    render() {

        return(
            <div>
                <h1>Bingemasters</h1>
                <Link to={`guesswho`}>
                    <button type="submit">
                        Start Game      
                    </button>
                </Link>
            </div>
        )   
    }   
};

export default HomePage;