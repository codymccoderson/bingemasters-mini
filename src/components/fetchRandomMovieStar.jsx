import React from 'react';

class FetchRandomMovieStar extends React.Component {

    state = {
        loading: true,
        star: null

    };

    async componentDidMount() {
        const randomPageFunction = function randomPage(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        };
        const randomPage = randomPageFunction(1, 500);
        console.log(randomPage);
        const url = `https://api.themoviedb.org/3/person/popular?api_key=0923dd9b4328f2ddced216cb32ecf851&language=en-US&page=${randomPage}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    };

    render() {
        return(
            <div>
                {this.state.loading ? <div>loading...</div> : <div>star...</div>
                    }
            </div>
        )
    }

};

export default FetchRandomMovieStar;