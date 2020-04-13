import React from 'react';

class FetchRandomMovieStar extends React.Component {

    state = {

        loading: true,
        randomPage: [],
        actorSelector: [],
        profilePath: "",
        userGuessInput: "",
        actorName: "",
        movieName: "",
        secondMovieName: ""

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
        const randomActorSelector = randomPageFunction(1, 20);
        const randomActorPhotoPath = data.results[randomActorSelector].profile_path;
        const randomActorName = data.results[randomActorSelector].name;
        const movieTheyWereIn = data.results[randomActorSelector].known_for[0].title;
        const secondMovieTheyWereIn = data.results[randomActorSelector].known_for[1].title;

        this.setState({
            loading: false,
            randomPage: [randomPage],
            actorSelector: [randomActorSelector],
            profilePath: randomActorPhotoPath,
            userGuessInput: "",
            actorName: randomActorName,
            movieName: movieTheyWereIn,
            secondMovieName: secondMovieTheyWereIn

        });
        console.log(randomActorPhotoPath);
        console.log(randomActorName);
        console.log(movieTheyWereIn);
        console.log(secondMovieTheyWereIn);
        
    };

    handleChange = event => {
        this.setState({
            userGuessInput: event.target.value
            })
        }

    render() {
        const imageURL = `https://image.tmdb.org/t/p/w235_and_h235_face${this.state.profilePath}`;
        return(
            <div>
                {this.state.loading || !this.state.profilePath ? (
                <div>loading...</div> 
                ) : (
                <div>
                    <img src={imageURL} alt="this... is a random actor"/>
                    <p>Hint: I was in...</p>
                </div>
                )}
                <div>
                    <form>
                        <input 
                        type="text"
                        placeholder="Name this actor."
                        onChange={this.handleChange}
                        />
                        <button type="submit">Final Answer?</button>
                    </form>
                </div>
            </div>
        )
    }

};

export default FetchRandomMovieStar;

//     // handleFinalAnswer = async () => {
//     //     const newActorData = await this.loadData();
//     //     if(randomActorName === event.target.value) {
//     //         this.setState({
//     //             actorData: newActorData
//     //         })
//     //     } else {
//     //         this.setState({
//     //             actorData: actorData
//     //         })
//     //     }
//     // }
    
