import React from 'react';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import HomePage from './HomePage';
import tv_static2 from '../tv_static2.jpg';

const StartGameBackground = styled.div`
    background: url(${another_retro_tv}) no-repeat center center fixed;
    background-size: 80vw 92vh;
    height: 100vh; 

    @media screen and (max-width: 850px) {
        background: url(${tv_static2}) no-repeat center center fixed;
        background-size: cover;
        height: 100vh;

    }
`
const StyledStartGame = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 700px;
    height: 700px;
    margin: 0 auto;
    padding-left: 0;
    position: relative;
    top: 180px;
    right: 150px;

    @media screen and (max-width: 1380px) {
        margin: 0 590px;

    }
    @media screen and (max-width: 1320px) {
        margin: 0 545px;
    }

    @media screen and (max-width: 1180px) {
        margin: 0 515px;
    }

    @media screen and (max-width: 1180px) {
        margin: 0 500px;
    }

    @media screen and (max-width: 1080px) {
        margin: 0 480px;
    }

    @media screen and (max-width: 950px) {
        margin: 0 435px;
    }

    @media screen and (max-width: 900px) {
        margin: 0 400px;
    }

    @media screen and (max-width: 850px) {
        margin: 0 450px;
        display: flex;
        align-items: center;
        flex-flow: column;
        width: 200px;
        height: 200px;
        padding-left: 0;
        position: relative;
        top: 230px;
    }

    @media screen and (max-width: 800px) {
        margin: 0 410px;
    }

    @media screen and (max-width: 750px) {
        margin: 0 400px;
    }

    @media screen and (max-width: 700px) {
        margin: 0 380px;
    }

    @media screen and (max-width: 675px) {
        margin: 0 350px;
    }

    @media screen and (max-width: 650px) {
        margin: 0 340px;
    }

    @media screen and (max-width: 625px) {
        margin: 0 330px;
    }

    @media screen and (max-width: 600px) {
        margin: 0 320px;
    }

    @media screen and (max-width: 585px) {
        margin: 0 310px;
    }

    @media screen and (max-width: 575px) {
        margin: 0 300px;
    }
`;

const HowToPlayTitle = styled.h1`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 48px;
    text-align: center;
`;

const WhatTheGameIs = styled.h2`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;
`


const ButtonLine = styled.div`
    display: flex;


    @media screen and (max-width: 750px) {
        margin: 0 360px;
    }

    @media screen and (max-width: 700px) {
        margin: 0 340px;
    }

    @media screen and (max-width: 675px) {
        margin: 0 320px;
    }

    @media screen and (max-width: 650px) {
        margin: 0 300px;
    }

    @media screen and (max-width: 625px) {
        margin: 0 290px;
    }

    @media screen and (max-width: 600px) {
        margin: 0 270px;
    }

    @media screen and (max-width: 575px) {
        margin: 0 235px;
    }
`

const ReturnHomeButton = styled.button`
    background-color: pink;
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;
    padding: 10px;
    margin: 5px;
    width: 150px;
    border-radius: 8px;
    box-sizing: border-box;
    border: solid 3px black;
    position: relative;
    right: 5px;

    @media screen and (max-width: 850px) {
        font-size: 14px;
        width: 120px;
    }

    @media screen and (max-width: 800px) {
        font-size: 14px;
        width: 120px;
    }

    @media screen and (max-width: 750px) {
        font-size: 14px;
        width: 120px;
    }

    @media screen and (max-width: 700px) {
        font-size: 14px;
        width: 120px;
    }

    @media screen and (max-width: 675px) {
        font-size: 14px;
        width: 120px;
    }

    @media screen and (max-width: 650px) {
        font-size: 14px;
        width: 120px;
    }

    @media screen and (max-width: 625px) {
        font-size: 14px;
        width: 120px;

    }

    @media screen and (max-width: 600px) {
        font-size: 14px;
        width: 110px;
    }

    @media screen and (max-width: 575px) {
        font-size: 14px;
        width: 100px;
    }

`;


class Instructions extends React.Component {

    state = {
        clickedReturn: false
    }

    handleClickReturn () {
        this.setState({
          clickedReturn: true
        })
      }

    render() {

        if (this.state.clickedReturn === false) {

        return(
            <StartGameBackground>
                <StyledStartGame>
                    <div className="Instructions">
                        <HowToPlayTitle>
                            How To Play
                        </HowToPlayTitle>
                        <WhatTheGameIs>
                            Bingemasters is a single player trivia game where you guess the name of the actor that appears on screen.
                        </WhatTheGameIs>
                        <ul>
                            <li>
                                <p>Players have 45 seconds to guess the actor in question.</p>
                            </li>
                            <li>
                                <p>Players must correctly spell the actor's name in the input field to score a point.</p>
                            </li>
                            <li>
                                <p>The goal of the game is to record the highest streak of correct answers and the highest streaks of all-time will be kept on the global leaderboard.</p>
                            </li>
                            <li>
                                <p>The game will end if your timer reaches zero. But don't fret! You can just play again!</p>
                            </li>
                        </ul>
                    </div>
                    <ButtonLine>
                        <ReturnHomeButton 
                            type="submit"
                            onClick={this.handleClickReturn.bind(this)}
                            >Return Home      
                        </ReturnHomeButton>
                    </ButtonLine>
                </StyledStartGame>
            </StartGameBackground>
        )} else {
            return <HomePage/> 
}}}

export default Instructions;