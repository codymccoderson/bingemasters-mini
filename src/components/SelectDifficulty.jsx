import React from 'react';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import tv_static2 from '../tv_static2.jpg';
import HomePage from './HomePage';
import MultipleChoice from './MultipleChoice';
import FetchRandomMovieStar from './FetchRandomMovieStar';

const SelectDifficultyBackground = styled.div`
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
const StyledSelectDifficulty = styled.div`
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

const SelectDifficultyTitle = styled.h1`
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

const EasyButton = styled.button`
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

const HardButton = styled.button`
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

const HomeButton = styled.button`
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

class SelectDifficulty extends React.Component {

    state = {
        clickedEasy: false,
        clickedHard: false,
        clickedHome: false
    }

    handleClickEasy () {
        this.setState({
          clickedEasy: true,
          clickedHard: false,
          clickedHome: false
        })
      }

    handleClickHard () {
        this.setState({
            clickedEasy: false,
            clickedHard: true,
            clickedHome: false
        })
    }

    handleClickHome () {
        this.setState({
            clickedEasy: false,
            clickedHard: false,
            clickedHome: true
        })
    }

    render() {

        if (this.state.clickedEasy === false && this.state.clickedHard === false && this.state.clickedHome === false) {

        return(
            <SelectDifficultyBackground>
                <StyledSelectDifficulty>
                    <SelectDifficultyTitle>
                        Bingemasters
                    </SelectDifficultyTitle>
                    <ButtonLine>
                        <EasyButton 
                            type="submit"
                            onClick={this.handleClickEasy.bind(this)}
                            >Easy   
                        </EasyButton>
                        <HardButton
                            type="submit"
                            onClick={this.handleClickHard.bind(this)}
                            >Hard   
                        </HardButton>
                    </ButtonLine>
                    <ButtonLine2>
                        <HomeButton
                            type="submit"
                            onClick={this.handleClickHome.bind(this)}
                            >Return Home
                        </HomeButton>
                    </ButtonLine2>
                </StyledSelectDifficulty>
            </SelectDifficultyBackground>
        )} else if (this.state.clickedEasy === true && this.state.clickedHard === false && this.state.clickedHome === false) {
            return <MultipleChoice/>
    }      else if (this.state.clickedEasy === false && this.state.clickedHard === true && this.state.clickedHome === false) {
            return <FetchRandomMovieStar/>
    }      else if (this.state.clickedEasy === false && this.state.clickedHard === false && this.state.clickedHome === true) {
            return <HomePage/>
    }
}}

export default SelectDifficulty;