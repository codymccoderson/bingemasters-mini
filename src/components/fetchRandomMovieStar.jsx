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
        resetTimer: false,
        currentScore: 0

    };

    componentDidMount() {
        this.setRandomPage();
        this.doIntervalChange();
    }

    async setRandomPage() {
        let actor = await getRandomPage();
        let length = (await Object.keys(actor.known_for).length) || 0;
        try {
          while ((await length) <= 2 || (await actor.profile_path) === null) {
            actor = await getRandomPage();
            length = (await Object.keys(actor.known_for).length) || 0;
          }
        } catch (error) {
          console.log(error);
        }
        const randomActorPhotoPath = await actor.profile_path;
        const randomActorName = await actor.name;
        const noAccentName = await randomActorName
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        const movieTheyWereIn = await actor.known_for[0].title;
        const secondMovieTheyWereIn = await actor.known_for[1].title;
        await this.setState({
          loading: false,
          randomPage: actor,
          profilePath: randomActorPhotoPath,
          userGuessInput: "",
          actorName: noAccentName,
          movieName: movieTheyWereIn,
          secondMovieName: secondMovieTheyWereIn,
        });
        console.log(randomActorName);
      }
    

    handleChange = event => {
        this.setState({
            userGuessInput: event.target.value
            })
        }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const { userGuessInput, actorName } = this.state;
        let { currentScore } = this.state;
        const submittedAnswer = userGuessInput;
        

        if (submittedAnswer === actorName) {
            // reload on correct guess
           this.setRandomPage();
           const newScore = (currentScore += 1);
           this.setState({
            userGuessInput: "",
            count: 30,
            currentScore: newScore
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
        const imageURL = `https://image.tmdb.org/t/p/w235_and_h235_bestv2${this.state.profilePath}`;
        const { count } = this.state;
        const { currentScore } = this.state;

        return(
            <div>
                {this.state.loading || !this.state.profilePath ? (
                <div>loading...</div> 
                ) : (
                <div>
                    <img src={imageURL} alt="this... is a random actor"/>
                    {this.state.movieName === undefined || this.state.secondMovieName === undefined ? (
                        <p>You're probably not gonna know who I am.</p>
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
                    <h2>Time left: {count} seconds</h2>
                    {this.state.currentScore ? (
                        <h3>Streak: {currentScore}</h3>
                    ): (
                        <h3 onSubmit={this.handleSubmit}>Streak: {currentScore}</h3>
                    )}    
                </div>
            </div>
        )
    }
};

export default FetchRandomMovieStar;
    
