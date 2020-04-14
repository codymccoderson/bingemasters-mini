import React from 'react';
import getRandomPage from '../utils/getRandomPage';
import randomizer from '../utils/randomizer';
import Timer from './Timer';

class FetchRandomMovieStar extends React.Component {

    state = {

        loading: true,
        randomPage: null,
        actorSelector: null,
        profilePath: "",
        userGuessInput: "",
        actorName: "",
        movieName: "",
        secondMovieName: ""

    };

    componentDidMount() {
        this.setRandomPage();
    }

    async setRandomPage() {
        const data = await getRandomPage();
        const randomActorSelector = randomizer(1, 20);
        const randomActorPhotoPath = data.results[randomActorSelector].profile_path;
        const randomActorName = data.results[randomActorSelector].name;
        const noAccentName = randomActorName.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        const movieTheyWereIn = data.results[randomActorSelector].known_for[0].title;
        const secondMovieTheyWereIn = data.results[randomActorSelector].known_for[1].title;

        this.setState({
            loading: false,
            randomPage: data,
            actorSelector: randomActorSelector,
            profilePath: randomActorPhotoPath,
            userGuessInput: "",
            actorName: noAccentName,
            movieName: movieTheyWereIn,
            secondMovieName: secondMovieTheyWereIn,

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
    
    handleSubmit = (event) => {
        event.preventDefault();
        const { userGuessInput, actorName } = this.state;
        const submittedAnswer = userGuessInput;

        this.setState({
            userGuessInput: ""
        })

        if (submittedAnswer === actorName) {
            // reload on correct guess
           this.setRandomPage();
           this.setState({
            userGuessInput: ""
        })
        } else {
            // stay on the same page if incorrect
            alert('WRONG');
        }
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
                    {this.state.movieName === undefined || this.state.secondMovieName === undefined ? (
                        <p>Sorry man, I really need to step my filmography game up.</p>
                    ) : (
                    <p>Hint: I was in {this.state.movieName} and {this.state.secondMovieName}.</p>)}
                </div>
                )}
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                        type="text"
                        placeholder="Name this actor."
                        onChange={this.handleChange}
                        value={this.state.userGuessInput}
                        />
                        <button type="submit"
                        >Final Answer?
                        </button>
                    </form>
                </div>
                <div>
                    <Timer startCount="20"/>
                </div>
            </div>
        )
    }
};

export default FetchRandomMovieStar;
    
