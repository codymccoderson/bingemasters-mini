import React from 'react';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';

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
    position: relative;
    top: 350px;

    `;

const GameOverTitle = styled.h1`
    color: black;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 36px;
`;

const PlayAgain = styled.button`
    background: white;
    color: black;
    font-size: 18px;
    padding: 10px;
    margin: 5px;
    width: 150px;
    border-color: black;
    border-radius: 10px;
    box-sizing: border-box;
    border-width: 2px;
    `;

class GameOver extends React.Component {

    render() {

        return(
            <GameOverBackground>
                <StyledGameOver>
                    <GameOverTitle>
                        Game Over.
                    </GameOverTitle>
                    <PlayAgain 
                        type="submit">Play Again
                    </PlayAgain>          
                </StyledGameOver>
            </GameOverBackground>
        )   
    }   
};

export default GameOver;