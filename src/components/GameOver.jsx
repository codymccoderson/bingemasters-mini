import React from 'react';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import FetchRandomMovieStar from './FetchRandomMovieStar';

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

    @media screen and (max-width: 700px) {
        position: relative;
        top: 330px;
        left: 5px;
    }

    @media screen and (max-width: 550px) {
        margin: 0 100px;
        position: relative;
        top: 330px;
    }

    `;

const GameOverTitle = styled.h1`
    color: black;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 36px;
`;

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

class GameOver extends React.Component {

    state = {
        clicked: false
    }

    handleClick () {
        this.setState({
          clicked: true
        })
      }

    render() {
        if (this.state.clicked === false) {

        return(
            <GameOverBackground>
                <StyledGameOver>
                    <GameOverTitle>
                        Game Over.
                    </GameOverTitle>
                    <PlayAgain 
                        type="submit"
                        onClick={this.handleClick.bind(this)}
                        >Play Again
                    </PlayAgain>          
                </StyledGameOver>
            </GameOverBackground>
        )} else {
            return <FetchRandomMovieStar/>
        }   
    }   
};

export default GameOver;