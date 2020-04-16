import React from 'react';
import getRandomPage from '../utils/getRandomPage';
import GameOver from './GameOver';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';

const HTMLWrapper = styled.div`
    background: url(${another_retro_tv}) no-repeat center center fixed;
    background-size: 82vw 95vh;
    height: 100vh;    
`

const AppWrapper = styled.div`
    
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    position: relative;
    top: 50px;
`

const MainTitle = styled.h1`
    font-size: 64px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

const ImageAndHintsWrapper = styled.div`

    .hint {
        font-size: 18px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        position: relative;
        left: 11px;
    }
`

const ImageWrapper = styled.div`


    .theActorImg {
        border-radius: 10px;
        box-sizing: border-box;
        border: solid 8px pink;
    }
    
`

const FormWrapper = styled.div`
`
const TheActualForm = styled.form`
    
    .userInput {
        font-size: 14px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        border-radius: 4px;
        box-sizing: border-box;
        border: solid 3px black;
        margin-bottom: 8px;
        position: relative;
        left: 26px
    }

    .userSubmitButton {
        background-color: pink;
        font-size: 14px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: black;
        border-radius: 4px;
        box-sizing: border-box;
        border: solid 3px black;
        position: relative;
        left: 52px;

    }
`
const TimeAndScoreWrapper = styled.div`

    font-size: 16px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
`

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
        count: 1,
        resetTimer: false,
        currentScore: 0,
        gameOver: false

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
           this.setRandomPage();
           const newScore = (currentScore += 1);
           this.setState({
            userGuessInput: "",
            count: 30,
            currentScore: newScore
        }) 
        } else {
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
        
        if (this.state.count >= 1) {

        return(
            <HTMLWrapper>
                <AppWrapper>
                    <MainTitle>
                        Bingemasters
                    </MainTitle>
                    {this.state.loading || !this.state.profilePath ? (
                    <div>loading...</div> 
                    ) : (
                    <ImageAndHintsWrapper>
                        <ImageWrapper>
                            <img className="theActorImg" src={imageURL} alt="this... is a random actor"/>
                        </ImageWrapper>
                        {this.state.movieName === undefined || this.state.secondMovieName === undefined ? (
                        <p className="hint">You're probably not gonna know who I am.</p>
                        ) : (
                        <p className="hint">Hint: I was in {this.state.movieName} and {this.state.secondMovieName}.</p>)}
                    </ImageAndHintsWrapper>
                    )}
                    <FormWrapper>
                        <TheActualForm onSubmit={this.handleSubmit}>
                            <input className="userInput" 
                            type="text"
                            placeholder="Name this actor."
                            onChange={this.handleChange}
                            value={this.state.userGuessInput}
                            required
                            />
                            <button className="userSubmitButton"type="submit"
                            >Final Answer?
                            </button>
                        </TheActualForm>
                    </FormWrapper>
                    <TimeAndScoreWrapper>
                        <h2 className="time">Time left: {count}</h2>
                        {this.state.currentScore ? (
                        <h3 className="score">Streak: {currentScore}</h3>
                        ) : (
                        <h3 onSubmit={this.handleSubmit}>Streak: {currentScore}</h3>
                        )}    
                    </TimeAndScoreWrapper>
                </AppWrapper>
            </HTMLWrapper>
        )} else {
            return <GameOver/>
        }
    }
};

export default FetchRandomMovieStar;
    
