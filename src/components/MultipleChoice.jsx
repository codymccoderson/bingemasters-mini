import React from 'react';
import GameOver from './GameOver';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import getActorsPage from '../utils/getActorsPage';
import randomizer from '../utils/randomizer';
import tv_static2 from '../tv_static2.jpg';
import HomePage from './HomePage';

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
        height: 39rem;
        margin: 0 auto;
        position: relative;
        top: 4rem;
        right: 1rem;
        background-color: whitesmoke;
        border-radius: 0.875rem;
        box-sizing: border-box;
        border: solid 0.2rem black;
    }

    @media screen and (max-width: 48rem) {
        margin: 0 10rem;   
    } 

    @media screen and (max-width: 44rem) {
        margin: 0 7rem;   
    }

    @media screen and (max-width: 40rem) {
        margin: 0 4rem;   
    } 

    @media screen and (max-width: 36rem) {
        margin: 0 2.5rem;   
    }

    @media screen and (max-width: 34rem) {
        margin: 0 1.8rem;   
    }

    @media screen and (max-width: 26.563rem) {
        margin: 0 1.75rem;
        position: relative;
        top: 3rem;
        width: 25rem;
        height: 42rem;   
    }

    @media screen and (max-width: 23.438rem) {
        width: 22rem;  
    }

    @media screen and (max-width: 20rem) {
        margin: 0 1.5rem;
        position: relative;
        width: 19.2rem;
        height: 42rem;   
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
        margin: 0 30.313rem;    
    }

    @media screen and (max-width: 64rem) {
        margin: 0 29rem;

    }

    @media screen and (max-width: 59.375rem) {
        margin: 0 25.938rem;
    }

    @media screen and (max-width: 54.688rem) {
        margin: 0 25rem;
        top: 7rem;
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

    @media screen and (max-width: 26.563rem) {
        position: relative;
        top: 1rem;   
    } 

`

const MainTitle = styled.h1`
    font-size: 2.2rem;
    font-family: 'Retro', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    @media screen and (max-width: 53.125rem) {
        font-size: 2.5rem;
        font-weight: bolder;
        color: pink;
        text-shadow: -1.1px 0 black, 0 1.1px black, 1.1px 0 black, 0 -1.1px black;
    }

    @media screen and (max-width: 20rem) {
        font-size: 2rem;
        }    
`

const ImageAndHintsWrapper = styled.div`
    position: relative;
    bottom: 1rem;

    .hint {
        font-size: 0.875rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        position: relative;
        left: 0.5rem;
        bottom: 1rem;

        @media screen and (max-width: 53.125rem) {
            font-weight: bolder;
            color: pink;
            text-shadow: -1.1px 0 black, 0 1.1px black, 1.1px 0 black, 0 -1.1px black;
        }

        @media screen and (max-width: 20rem) {
        font-size: 0.75rem;
        bottom: 0.75rem;
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

    @media screen and (max-width: 26.563rem) {
        position: relative;
        bottom: 2rem;   
    }          
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

    @media screen and (max-width: 26.563rem) {
        margin-right: 1.5rem;   
    }

    @media screen and (max-width: 23.438rem) {
        margin-right: 0.875rem;
        font-size: 0.750rem;   
    }

    @media screen and (max-width: 20rem) {
        margin-right: 0.3rem;
        font-size: 0.688rem;
    }   
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

    @media screen and (max-width: 26.563rem) {
        margin-right: 1.5rem;   
    }

    @media screen and (max-width: 23.438rem) {
        margin-right: 0.875rem;
        font-size: 0.750rem;   
    }

    @media screen and (max-width: 20rem) {
        margin-right: 0.3rem;
        font-size: 0.688rem;
    }    
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

    @media screen and (max-width: 26.563rem) {
        margin-right: 1.5rem;   
    }

    @media screen and (max-width: 23.438rem) {
        margin-right: 0.875rem;
        font-size: 0.750rem;   
    }

    @media screen and (max-width: 20rem) {
        margin-right: 0.3rem;
        font-size: 0.688rem;
    }   
`
const OptionFour = styled.button`
    background-color: pink;
    font-size: 0.875rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: black;
    border-radius: 0.25rem;
    box-sizing: border-box;
    border: solid 0.188rem black;

    @media screen and (max-width: 23.438rem) {
        font-size: 0.750rem;   
    }

    @media screen and (max-width: 20rem) {
        font-size: 0.688rem;
    }     
`

const TimeAndScoreWrapper = styled.div`

    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
    position: relative;
    bottom: 2.5rem;

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
const ButtonLine2 = styled.div`
    display: flex;
    position: relative;
    left: 1rem;
    bottom: 2.5rem;        
`

const QuitButton = styled.button`
    background-color: black;
    font-size: 1.2rem;
    font-weight: bolder;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: pink;
    border-radius: 0.25rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
    margin-right: 2.3rem;
    position: relative;
    bottom: 1.5rem;
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
        count: 60,
        resetTimer: false,
        currentScore: 0,
        wrongAnswer: false,
        clickHome: false

    };

    componentDidMount() {
        this.setNewPage();
        this.doIntervalChange();
    }

    async setNewPage() {
        let actors = await getActorsPage();
        let correctActor = await actors[randomizer(1,19)]

          while (
            !correctActor.known_for ||
            correctActor.known_for.length <= 2 ||
            !correctActor.profile_path ||
            correctActor.popularity <= 7 ||
            correctActor.adult === "true" ||
            correctActor.name === "R. Sarathkumar" ||
            correctActor.name === "Peyton List" ||
            correctActor.name === "Temuera Morrison" ||
            correctActor.name === "Gal Gadot" ||
            correctActor.name === "Eloise Smyth" ||
            correctActor.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "") === "Eiza Gonzalez" ||
            correctActor.name === "Aubrey Plaza" ||
            correctActor.name === "Kathleen Robertson" ||
            correctActor.name === "Yoon Se-na" ||
            correctActor.name === "Geraldine Chaplin" ||
            correctActor.name === "Alice Pagani" ||
            correctActor.name === "Dylan O'Brien" ||
            correctActor.name === "Clara Lago" ||
            correctActor.name === "Colin Farrell" ||
            correctActor.name === "Richard Harris" ||
            correctActor.name === "Tara Reid" ||
            correctActor.name === "Cobie Smulders" ||
            correctActor.name === "Ty Panitz" ||
            correctActor.name === "Millie Bobby Brown" ||
            correctActor.known_for_department !== "Acting"
          ) {
            let actors = await getActorsPage();  
            correctActor = await actors[randomizer(1,19)];
          }
        
        let dudActor1 = await actors[(1,19)];
        let dudActor2 = await actors[(1,18)];
        let dudActor3 = await actors[(1,17)];

        while (
            dudActor1.name === correctActor.name ||
            dudActor1.name === dudActor2.name ||
            dudActor1.name === dudActor3.name ||
            dudActor1.gender !== correctActor.gender ||
            dudActor2.gender !== correctActor.gender ||
            dudActor3.gender !== correctActor.gender 
        ) {
            let actors = await getActorsPage();
            dudActor1 = await actors[(1,19)];
            dudActor2 = await actors[(1,18)];
            dudActor3 = await actors[(1,17)];
        }
    
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

    handleClickHome = (event) => {
        event.preventDefault();
        this.setState({
            clickHome: true
        })
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
        
        if (this.state.count >= 1 && this.state.wrongAnswer === false && this.state.clickHome === false) {

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
                        <ButtonLine2>
                            <QuitButton
                            type="submit"
                            onClick={this.handleClickHome}
                            >Quit Game
                            </QuitButton>
                        </ButtonLine2>
                    </AppWrapper>
                </CardWrapper>
            </HTMLWrapper>
        )} else if (this.state.clickHome === true) {
            return <HomePage/>
        }  else {
            return <GameOver/>
        }
    }
};

export default MultipleChoice;
    
