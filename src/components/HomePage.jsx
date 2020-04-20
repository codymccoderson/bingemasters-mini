import React from 'react';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import FetchRandomMovieStar from './FetchRandomMovieStar';

const StartGameBackground = styled.div`
    background: url(${another_retro_tv}) no-repeat center center fixed;
    background-size: 80vw 92vh;
    height: 100vh; 
`
const StyledStartGame = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    padding-left: 0;
    position: relative;
    top: 230px;
    right: 130px;

    @media screen and (max-width: 1000px) {
        margin: 0 430px;
    }

    @media screen and (max-width: 950px) {
        margin: 0 420px;
    }

    @media screen and (max-width: 900px) {
        margin: 0 400px;
    }

    @media screen and (max-width: 850px) {
        margin: 0 380px;
    }

    @media screen and (max-width: 800px) {
        margin: 0 360px;
    }

    @media screen and (max-width: 750px) {
        margin: 0 340px;
    }

    @media screen and (max-width: 700px) {
        margin: 0 320px;
    }

    @media screen and (max-width: 675px) {
        margin: 0 300px;
    }

    @media screen and (max-width: 650px) {
        margin: 0 290px;
    }

    @media screen and (max-width: 625px) {
        margin: 0 280px;
    }

    @media screen and (max-width: 600px) {
        margin: 0 270px;
    }

    @media screen and (max-width: 585px) {
        margin: 0 255px;
    }

    @media screen and (max-width: 575px) {
        margin: 0 240px;
    }
`;

const StartGameTitle = styled.h1`
    color: black;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 96px;

    @media screen and (max-width: 1380px) {
        font-size: 78px;
    }

    @media screen and (max-width: 1280px) {
        font-size: 72px;
    }

    @media screen and (max-width: 1180px) {
        font-size: 60px;
    }

    @media screen and (max-width: 1080px) {
        font-size: 48px;
    }

    @media screen and (max-width: 980px) {
        font-size: 36px;
    }
    
`;

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

const StartGameButton = styled.button`
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

class HomePage extends React.Component {

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
            <StartGameBackground>
                <StyledStartGame>
                    <StartGameTitle>
                        Bingemasters
                    </StartGameTitle>
                    <ButtonLine>
                        <StartGameButton 
                            type="submit"
                            onClick={this.handleClick.bind(this)}
                            >Start Game      
                        </StartGameButton>
                    </ButtonLine>
                </StyledStartGame>
            </StartGameBackground>
        )} else {
            return <FetchRandomMovieStar/>   
    };
}}

export default HomePage;