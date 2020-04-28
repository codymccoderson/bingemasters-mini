import React from 'react';
import GameOver from './GameOver';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import getActorsPage from '../utils/getActorsPage';
import randomizer from '../utils/randomizer';
import tv_static2 from '../tv_static2.jpg';

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
        width: 30rem;
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
        margin: 0 1.5rem;   
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
    top: 6rem;
    right: 9.375rem;

    @media screen and (max-width: 71.875rem) {
        position: relative;
        top: 5rem;
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
        margin: 0 29rem;
        position: relative;
        right: 0.1rem;
        top: -1.8rem;
    }

    @media screen and (max-width: 50rem) {
        margin: 0 23.75rem;
    }

    @media screen and (max-width: 46.875rem) {
        margin: 0 22.5rem;
    }

    @media screen and (max-width: 43.75rem) {
        margin: 0 21.25rem;
    }

    @media screen and (max-width: 42.188rem) {
        margin: 0 20rem;
    }

    @media screen and (max-width: 40.625rem) {
        margin: 0 18.75rem;
    }

    @media screen and (max-width: 39.063rem) {
        margin: 0 18.125rem;
    }

    @media screen and (max-width: 37.5rem) {
        margin: 0 16.875rem;
    }

    @media screen and (max-width: 35.938rem) {
        margin: 0 15.938rem;
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

const ButtonLine = styled.div`
    display: flex;
    position: relative;
    bottom: 2.5rem;
`

const OptionOne = styled.button`
    background-color: pink;
    font-size: 0.875rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: black;
    border-radius: 0.25rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
    margin-right: 2.3rem;
`
const OptionTwo = styled.button`
    background-color: pink;
    font-size: 0.875rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: black;
    border-radius: 0.25rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
    margin-right: 2.3rem;
`
const OptionThree = styled.button`
    background-color: pink;
    font-size: 0.875rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: black;
    border-radius: 0.25rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
    margin-right: 2.3rem;
`
const OptionFour = styled.button`
    background-color: pink;
    font-size: 0.875rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: black;
    border-radius: 0.25rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
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

class MultipleChoice extends React.Component {

    state = {

        loading: true,
        actorList: [],
        actorSelector: null,
        profilePath: "",
        actorName: "",
        movieName: "",
        secondMovieName: "",
        count: 10000,
        resetTimer: false,
        currentScore: 0,
        wrongAnswer: false

    };

    componentDidMount() {
        this.setNewPage();
        this.doIntervalChange();
    }

    async setNewPage() {
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
        

        let dudActor1 = await actors[(1,6)];
        let dudActor2 = await actors[(7,12)];
        let dudActor3 = await actors[(13,17)];
    
        const correctActorPhotoPath = await correctActor.profile_path;
        const correctActorName = await correctActor.name;
        const movieTheyWereIn = await correctActor.known_for[0].title;
        const secondMovieTheyWereIn = await correctActor.known_for[1].title;
        const firstDudActorName = await dudActor1.name;
        const secondDudActorName = await dudActor2.name;
        const thirdDudActorName = await dudActor3.name;
        let actorList = [correctActorName, firstDudActorName, secondDudActorName, thirdDudActorName];

        function shuffle (actorList) {
            let currentIndex = actorList.length, temporaryValue, randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
              // And swap it with the current element.
              temporaryValue = actorList[currentIndex];
              actorList[currentIndex] = actorList[randomIndex];
              actorList[randomIndex] = temporaryValue;
            }
            return actorList;
          }
          shuffle(actorList);

        await this.setState({
          loading: false,
          actorList: actorList,
          profilePath: correctActorPhotoPath,
          actorName: correctActorName,
          movieName: movieTheyWereIn,
          secondMovieName: secondMovieTheyWereIn,

        });
        console.log(correctActorName);
        console.log(correctActor.popularity);
        console.log(correctActor.known_for_department);
      }
    
    handleClick = (event) => {

        const value = event.target.value;
        const { actorName } = this.state;
        let { currentScore } = this.state;

        if (value === actorName) {
           this.setNewPage();
           const newScore = (currentScore += 1);
           this.setState({
            count: 60,
            currentScore: newScore
        }) 
        } else {
            this.setState({
                wrongAnswer: true
            })
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
        
        if (this.state.count >= 1 && this.state.wrongAnswer === false) {

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
                        <ButtonLine>
                            <OptionOne
                            type="submit"
                            onClick={this.handleClick}
                            value={this.state.actorList[0]}
                            >{this.state.actorList[0]}
                            </OptionOne>
                            <OptionTwo
                            type="submit"
                            onClick={this.handleClick}
                            value={this.state.actorList[1]}
                            >{this.state.actorList[1]}
                            </OptionTwo>
                            <OptionThree
                            type="submit"
                            onClick={this.handleClick}
                            value={this.state.actorList[2]}
                            >{this.state.actorList[2]}
                            </OptionThree>
                            <OptionFour
                            type="submit"
                            onClick={this.handleClick}
                            value={this.state.actorList[3]}
                            >{this.state.actorList[3]}
                            </OptionFour>   
                        </ButtonLine> 
                        <TimeAndScoreWrapper>
                            <h2 className="time">Time left: {count}</h2>
                            {this.state.currentScore ? (
                            <h3 className="score">Streak: {currentScore}</h3>
                            ) : (
                            <h3 onClick={this.handleClick}>Streak: {currentScore}</h3>
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

export default MultipleChoice;
    
