import React from 'react';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import Instructions from './Instructions';
import Leaderboard from './Leaderboard';
import tv_static2 from '../tv_static2.jpg';
import FetchRandomMovieStar from './FetchRandomMovieStar';
import MultipleChoice from './MultipleChoice';

const StartGameBackground = styled.div`
    background: url(${another_retro_tv}) no-repeat center center fixed;
    background-size: 80vw 92vh;
    height: 100vh; 
    font-size: 16px;

    @media screen and (max-width: 53.125em) {
        background: url(${tv_static2}) no-repeat center center fixed;
        background-size: cover;
        height: 100vh;

    }
`
const StyledStartGame = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 12.5rem;
    height: 12.5rem;
    margin: 0 auto;
    position: relative;
    top: 8rem;
    right: 9rem;

    @media screen and (max-width: 86.25rem) {
        margin: 0 36.875rem;

    }
    @media screen and (max-width: 82.5rem) {
        margin: 0 34.5rem;
    }

    @media screen and (max-width: 73.75rem) {
        margin: 0 32rem;
    }

    @media screen and (max-width: 67.5rem) {
        margin: 0 28rem;
    }

    @media screen and (max-width: 59.375rem) {
        margin: 0 26.3rem;
    }

    @media screen and (max-width: 56.25rem) {
        margin: 0 24.5rem;
    }

    @media screen and (max-width: 53.125rem) {
        margin: 0 28.5rem;
        display: flex;
        align-items: center;
        flex-flow: column;
        width: 12.5rem;
        height: 12.5rem;
        position: relative;
        top: 8rem;
    }

    @media screen and (max-width: 51rem) {
        margin: 0 28rem;
    }

    @media screen and (max-width: 51rem) {
        margin: 0 27.5rem;
    }

    @media screen and (max-width: 46.875rem) {
        margin: 0 26.5rem;
    }

    @media screen and (max-width: 43.75rem) {
        margin: 0 24.5rem;
    }

    @media screen and (max-width: 42.188rem) {
        margin: 0 23rem;
    }

    @media screen and (max-width: 40.625rem) {
        margin: 0 21.5rem;
    }

    @media screen and (max-width: 39.063rem) {
        margin: 0 20rem;
    }

    @media screen and (max-width: 37.5rem) {
        margin: 0 19rem;
    }

    @media screen and (max-width: 35.938rem) {
        margin: 0 18rem;
    }
`;

const StartGameTitle = styled.h1`
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 5rem;

    @media screen and (max-width: 86.25rem) {
        font-size: 4.875rem;
    }

    @media screen and (max-width: 82.5rem) {
        font-size: 4.5rem;
    }

    @media screen and (max-width: 73.75rem) {
        font-size: 3.75rem;
    }

    @media screen and (max-width: 67.5rem) {
        font-size: 3.5rem;
    }

    @media screen and (max-width: 53.125rem) {
        font-size: 3.75rem;
    }

    @media screen and (max-width: 40.625rem) {
        font-size: 3.25rem;
    }  
`;

const ButtonLine = styled.div`
    display: flex;
    position: relative;
    bottom: 1.25rem;


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
        margin: 0 14.688rem;
    }
`

const StartGameButton = styled.button`
    background-color: pink;
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 0.875rem;
    padding: 0.625rem;
    margin: 1.25rem;
    width: 6rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
    position: relative;
    right: 1.813rem;

    @media screen and (max-width: 53.125rem) {
        width: 7.5rem;
        margin: 1.875rem;
    }

    @media screen and (max-width: 37.5rem) {
        width: 6.875rem;
    }

    @media screen and (max-width: 35.938rem) {
        width: 6.25rem;
    }

`;

const HowToPlayButton = styled.button`
    background-color: pink;
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 0.875rem;
    padding: 0.625rem;
    margin: 1.25rem;
    width: 6rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
    position: relative;
    left: 1.5rem;

    @media screen and (max-width: 53.125rem) {
        width: 7.5rem;
        margin: 1.875rem;
    }

    @media screen and (max-width: 37.5rem) {
        width: 6.875rem;
    }

    @media screen and (max-width: 35.938rem) {
        width: 6.25rem;
    }

`;

const ButtonLine2 = styled.div`
    display: flex;
    position: relative;
    bottom: 1.25rem;


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
        margin: 0 14.688rem;
    }
`;

const LeaderboardButton = styled.button`
    background-color: pink;
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 0.875rem;
    padding: 0.625rem;
    margin: 0.313rem;
    width: 6rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
    position: relative;
    top: 0.625rem;
    right: 0.313rem;

    @media screen and (max-width: 53.125rem) {
        font-size: 0.875rem;
        width: 7.5rem;
    }

    @media screen and (max-width: 37.5rem) {
        width: 6.875rem;
    }

    @media screen and (max-width: 35.938rem) {
        width: 6.25rem;
    }
`;

class HomePage extends React.Component {

    state = {
        clickedGame: false,
        clickedHowTo: false,
        clickedLeaderboard: false
    }

    handleClickGame () {
        this.setState({
          clickedGame: true,
          clickedHowTo: false,
          clickedLeaderboard: false
        })
      }

    handleClickHowTo () {
        this.setState({
            clickedGame: false,
            clickedHowTo: true,
            clickedLeaderboard: false
        })
    }

    handleClickLeaderboard () {
        this.setState({
            clickedGame: false,
            clickedHowTo: false,
            clickedLeaderboard: true
        })
    }

    render() {

        if (this.state.clickedGame === false && this.state.clickedHowTo === false && this.state.clickedLeaderboard === false) {

        return(
            <StartGameBackground>
                <StyledStartGame>
                    <StartGameTitle>
                        Bingemasters
                    </StartGameTitle>
                    <ButtonLine>
                        <StartGameButton 
                            type="submit"
                            onClick={this.handleClickGame.bind(this)}
                            >Start Game      
                        </StartGameButton>
                        <HowToPlayButton
                            type="submit"
                            onClick={this.handleClickHowTo.bind(this)}
                            >How to Play   
                        </HowToPlayButton>
                    </ButtonLine>
                    <ButtonLine2>
                        <LeaderboardButton
                            type="submit"
                            onClick={this.handleClickLeaderboard.bind(this)}
                            >All-Time Leaderboard
                        </LeaderboardButton>
                    </ButtonLine2>
                </StyledStartGame>
            </StartGameBackground>
        )} else if (this.state.clickedGame === true && this.state.clickedHowTo === false && this.state.clickedLeaderboard === false) {
            return <MultipleChoice/>
    }      else if (this.state.clickedGame === false && this.state.clickedHowTo === true && this.state.clickedLeaderboard === false) {
            return <Instructions/>
    }      else if (this.state.clickedGame === false && this.state.clickedHowTo === false && this.state.clickedLeaderboard === true) {
            return <Leaderboard/>
    }
}}

export default HomePage;