import React from 'react';
import GameOver from './GameOver';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import tv_static2 from '../tv_static2.jpg';
import getActorsPage from '../utils/getActorsPage';
import randomizer from '../utils/randomizer';

const HTMLWrapper = styled.div`

    background: url(${another_retro_tv}) no-repeat center center fixed;
    background-size: 82vw 95vh;
    height: 100vh;
    font-size: 16px;  

    @media screen and (max-width: 53.125rem) {
        background: url(${tv_static2}) no-repeat center center fixed;
        background-size: cover;
        height: 100vh;

    }  
`

const CardWrapper = styled.div`
    @media screen and (max-width: 53.125rem) {
        display: flex;
        align-items: center;
        flex-flow: column;
        width: 21rem;
        height: 34.5rem;
        margin: 0 auto;
        position: relative;
        top: 5rem;
        right: 1rem;
        background-color: whitesmoke;
        border-radius: 0.875rem;
        box-sizing: border-box;
        border: solid 0.2rem black;
    }

    @media screen and (max-width: 36rem) {
        margin: 0 5.7rem;   
    }  
    
`

const AppWrapper = styled.div`
    
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 12.5rem;
    height: 12.5rem;
    margin: 0 auto;
    position: relative;
    top: 7rem;
    right: 9.375rem;

    @media screen and (max-width: 71.875rem) {
        margin: 0 30.313rem;    
    }

    @media screen and (max-width: 64.063rem) {
        margin: 0 27.188rem;
    }

    @media screen and (max-width: 59.375rem) {
        margin: 0 25.938rem;
    }

    @media screen and (max-width: 54.688rem) {
        margin: 0 25rem;
    }

    @media screen and (max-width: 53.125rem) {
        margin: 0 28.5rem;
        position: relative;
        right: 0.1rem;
        top: -1.8rem;

    }

    @media screen and (max-width: 50rem) {
        margin: 0 25.5rem;
    }

    @media screen and (max-width: 46.875rem) {
        margin: 0 24rem;
    }

    @media screen and (max-width: 43.750rem) {
        margin: 0 23.5rem;
    }

    @media screen and (max-width: 42.188rem) {
        margin: 0 23rem;
    }

    @media screen and (max-width: 40.625rem) {
        margin: 0 22rem;
    }

    @media screen and (max-width: 39.063rem) {
        margin: 0 21rem;
    }

    @media screen and (max-width: 37.5rem) {
        margin: 0 19.5rem;
    }

    @media screen and (max-width: 35.938rem) {
        margin: 0 18.5rem;
    }

`

const MainTitle = styled.h1`
    font-size: 2.2rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    @media screen and (max-width: 53.125rem) {
        font-size: 2.5rem;
        font-weight: bolder;
        color: pink;
        text-shadow: -1.1px 0 black, 0 1.1px black, 1.1px 0 black, 0 -1.1px black;
    }
`

const ImageAndHintsWrapper = styled.div`
    position: relative;
    bottom: 1rem;


    .hint {
        font-size: 1rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        position: relative;
        left: 0.5rem;
        bottom: 1rem;

        @media screen and (max-width: 53.125rem) {
            font-weight: bolder;
            color: pink;
            text-shadow: -1.1px 0 black, 0 1.1px black, 1.1px 0 black, 0 -1.1px black;
        }


    }
`

const ImageWrapper = styled.div`


    .theActorImg {
        border-radius: 0.625rem;
        box-sizing: border-box;
        border: solid 0.5rem pink;

        @media screen and (max-width: 53.125rem) {
            border: solid 0.5rem black;
        }
    }
    
`

const FormWrapper = styled.div`
    position: relative;
    bottom: 2.5rem;

`
const TheActualForm = styled.form`
    
    .userInput {
        font-size: 0.875rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        border-radius: 0.25rem;
        box-sizing: border-box;
        border: solid 0.188rem black;
        margin-bottom: 0.5rem;
        position: relative;
        left: 1.625rem
    }

    .userSubmitButton {
        background-color: pink;
        font-size: 0.875rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: black;
        border-radius: 0.25rem;
        box-sizing: border-box;
        border: solid 0.188rem black;
        position: relative;
        left: 3.25rem;

    }
`
const TimeAndScoreWrapper = styled.div`

    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
    position: relative;
    bottom: 3rem;

    @media screen and (max-width: 53.125rem) {
        position: relative;
        bottom: 2rem;    
    }

    .time {
        font-size: 1rem;

        @media screen and (max-width: 53.125rem) {
        font-size: 1.5rem    
        }
        
    }

    h3 {
        font-size: 1rem;
        position: relative;
        bottom: 0.75rem;

        @media screen and (max-width: 53.125rem) {
        font-size: 1.5rem;
        font-weight: bolder;
        color: pink;
        text-shadow: -1.1px 0 black, 0 1.1px black, 1.1px 0 black, 0 -1.1px black;
        }

    }

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
        count: 60,
        resetTimer: false,
        currentScore: 0,
        gameOver: false

    };

    componentDidMount() {
        this.setRandomPage();
        this.doIntervalChange();
    }

    async setRandomPage() {
        
        let actors = await getActorsPage();
        let correctActor = await actors[randomizer(1,18)]

          while (
            !correctActor.known_for ||
            correctActor.known_for.length <= 2 ||
            !correctActor.profile_path ||
            correctActor.popularity <= 7
          ) {
            let actors = await getActorsPage();  
            correctActor = await actors[randomizer(1,18)];
          }

        const randomActorPhotoPath = await correctActor.profile_path;
        const randomActorName = await correctActor.name;
        const noAccentName = await randomActorName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const movieTheyWereIn = await correctActor.known_for[0].title;
        const secondMovieTheyWereIn = await correctActor.known_for[1].title;

        this.setState({
          loading: false,
          randomPage: correctActor,
          profilePath: randomActorPhotoPath,
          userGuessInput: "",
          actorName: noAccentName,
          movieName: movieTheyWereIn,
          secondMovieName: secondMovieTheyWereIn,
        });
        console.log(randomActorName);
        console.log(noAccentName);
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
            count: 60,
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
            count: 60
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
                <CardWrapper>
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
                </CardWrapper>
            </HTMLWrapper>
        )} else {
            return <GameOver/>
        }
    }
};

export default FetchRandomMovieStar;
    
