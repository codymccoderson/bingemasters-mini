import React from 'react';
import getRandomPage from '../utils/getRandomPage';

class FetchRandomMovieStar extends React.Component {

    state = {

        loading: true,
        randomPage: null,
        actorSelector: null,
        profilePath: "",
        userGuessInput: "",
        actorName: "",
        movieName: "",
        secondMovieName: "",
        count: 30,
        resetTimer: false

    };

    componentDidMount() {
        this.setRandomPage();
        this.doIntervalChange();
    }

    async setRandomPage() {
        const actor = await getRandomPage();
        console.log(actor);
        const randomActorPhotoPath = actor.profile_path;
        const randomActorName = actor.name;
        const noAccentName = randomActorName.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        const movieTheyWereIn = actor.known_for[0].title;
        const secondMovieTheyWereIn = actor.known_for[1].title;

        this.setState({
            loading: false,
            randomPage: actor,
            profilePath: randomActorPhotoPath,
            userGuessInput: "",
            actorName: noAccentName,
            movieName: movieTheyWereIn,
            secondMovieName: secondMovieTheyWereIn

        });
        console.log(randomActorPhotoPath);
        console.log(randomActorName);
        console.log("Actor no accents: ", noAccentName);
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
        const { userGuessInput, actorName  } = this.state;
        const submittedAnswer = userGuessInput;

        if (submittedAnswer === actorName) {
            // reload on correct guess
           this.setRandomPage();
           this.setState({
            userGuessInput: "",
            count: 30
        }) 
        } else {
            // stay on the same page if incorrect
            this.setState({
                userGuessInput: ""
            })
            alert('WRONG');
        }
    }

    resetClock () {
        clearInterval(this.myInterval)
        this.setState({
            count: 30
        })
    }

    doIntervalChange = () => {
        this.myInterval = setInterval(() => {
          if (this.state.count > 0)
        this.setState(prevState => ({
          count: prevState.count - 1
        }))
      }, 1000)
    }

    componentWillUnmount () {
        clearInterval(this.myInterval)
      }

    render() {
        const imageURL = `https://image.tmdb.org/t/p/w235_and_h235_face${this.state.profilePath}`;
        const { count } = this.state;

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
                        required
                        />
                        <button type="submit"
                        >Final Answer?
                        </button>
                    </form>
                </div>
                <div>
                    <h1>Time left: {count} seconds</h1>
                </div>
            </div>
        )
    }
};

export default FetchRandomMovieStar;
    
