import React from 'react';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import FetchRandomMovieStar from './FetchRandomMovieStar';
import HomePage from './HomePage';

const GameOverBackground = styled.div`
    background: url(${another_retro_tv}) no-repeat center center fixed;
    background-size: 80vw 92vh;
    height: 100vh; 
`

const StyledGameOver = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    padding-left: 0;
    position: relative;
    top: 330px;
    right: 130px;

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
`;

const GameOverTitle = styled.h1`
    color: black;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 36px;
`;

const ButtonLine = styled.div`
    margin: 10px auto;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    max-width: 90%;
`

const PlayAgain = styled.button`
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
    
`;



const GoHomeButton = styled.button`
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
`;

class GameOver extends React.Component {

    state = {
        clicked: false,
        clickedHome: false
    }

    handleClick () {
        this.setState({
          clicked: true,
          clickedHome: false
        })
      }
    
    handleClickHome () {
        this.setState({
            clicked: false,
            clickedHome: true
        })
    }

    render() {
        if (this.state.clicked === false && this.state.clickedHome === false) {

        return(
            <GameOverBackground>
                <StyledGameOver>
                    <GameOverTitle>
                        Game Over.
                    </GameOverTitle>
                    <ButtonLine>
                        <GoHomeButton
                            type="submit"
                            onClick={this.handleClickHome.bind(this)}
                            >Return Home
                        </GoHomeButton>
                        <PlayAgain 
                            type="submit"
                            onClick={this.handleClick.bind(this)}
                            >Play Again
                        </PlayAgain>  
                    </ButtonLine>
                            
                </StyledGameOver>
            </GameOverBackground>
        )} else if (this.state.clicked === true && this.state.clickedHome === false) {
            return <FetchRandomMovieStar/>
        }  else if (this.state.clicked === false && this.state.clickedHome === true) {
            return <HomePage/>
        } 
    }   
};

export default GameOver;