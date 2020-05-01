import React from 'react';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import HomePage from './HomePage';
import tv_static2 from '../tv_static2.jpg';

const HowToPlayBackground = styled.div`
    background: url(${another_retro_tv}) no-repeat center center fixed;
    background-size: 80vw 92vh;
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
        height: 36rem;
        margin: 0 auto;
        position: relative;
        top: 5rem;
        right: 0.5rem;
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

    @media screen and (max-width: 34rem) {
        margin: 0 1.4rem;   
    }

    @media screen and (max-width: 26.563rem) {
        margin: 0 1.3rem;
        position: relative;
        top: 3rem;
        width: 25rem;
        height: 42rem;   
    }

    @media screen and (max-width: 23.438rem) {
        width: 22rem;  
    }

    @media screen and (max-width: 20rem) {
        margin: 0 0.9rem;
        position: relative;
        width: 19.2rem;
        height: 42rem;   
    }            
`

const StyledHowToPlay = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 43.75rem;
    height: 43.75rem;
    margin: 0 auto;
    position: relative;
    top: 7.8rem;
    right: 9.375rem;

    @media screen and (max-width: 90rem) {
        margin: 0 25rem;
        position: relative;
        top: 10rem;
    }

    @media screen and (max-width: 89rem) {
        margin: 0 24.5rem;
        width: 41.25rem;
        height: 41.25rem;

    }
    @media screen and (max-width: 87.5rem) {
        margin: 0 24rem;
        width: 38.75rem;
        height: 38.75rem;
    }

    @media screen and (max-width: 83.75rem) {
        margin: 0 25rem;
        width: 36.25rem;
        height: 36.25rem;
    }

    @media screen and (max-width: 80.625rem) {
        margin: 0 24rem;
        width: 33.75rem;
        height: 33.75rem;
    }

    @media screen and (max-width: 77.5rem) {
        margin: 0 22.5rem;
        width: 31.25rem;
        height: 31.25rem;
    }

    @media screen and (max-width: 74.375rem) {
        margin: 0 25rem;
        width: 28.75rem;
        height: 28.75rem;
    }

    @media screen and (max-width: 71.25rem) {
        margin: 0 24rem;
    }

    @media screen and (max-width: 68.125rem) {
        margin: 0 23rem;
    }

    @media screen and (max-width: 64rem) {
        position: relative;
        top: 7rem;
        margin: 0 22.5rem;
        width: 28rem;
        height: 28rem;
    }

    @media screen and (max-width: 61.875rem) {
        position: relative;
        top: 5rem;
        margin: 0 22rem;
        width: 23.75rem;
        height: 23.75rem;
    }

    @media screen and (max-width: 58.75rem) {
        margin: 0 21.5rem;
        width: 22.5rem;
        height: 22.5rem;
    }

    @media screen and (max-width: 55.625rem) {
        margin: 0 21rem;
        width: 21.25rem;
        height: 21.25rem;
    }

    @media screen and (max-width: 53.125rem) {
        position: relative;
        top: 2rem;
        right: -0.5rem;
        width: 28rem;
        height: 28rem;
    }

    @media screen and (max-width: 52.5rem) {
        margin: 0 17.5rem;

    }

    @media screen and (max-width: 48rem) {
        margin: 0 20rem;
        width: 28.75rem;
        height: 28.75rem;
    }

    @media screen and (max-width: 46.25rem) {
        margin: 0 15rem;
        width: 27.5rem;
        height: 27.5rem;
    }

    @media screen and (max-width: 43.125rem) {
        margin: 0 13.75rem;
        width: 26.25rem;
        height: 26.25rem;
    }

    @media screen and (max-width: 40rem) {
        margin: 0 12.5rem;
        width: 25rem;
        height: 25rem;
    }

    @media screen and (max-width: 26.563rem) {
        position: relative;
        top: 3rem;
        width: 22rem;
    }

    @media screen and (max-width: 23.438rem) {
        position: relative;
        top: 1rem;
        right: -0.2rem;
        width: 18rem;
    }

    @media screen and (max-width: 20rem) {
        width: 17rem;
    }
`;

const HowToPlayTitle = styled.h1`
    font-family: 'Retro', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.8rem;
    text-align: center;

    @media screen and (max-width: 87.5rem) {
        font-size: 2.25rem;
    }
`;

const WhatTheGameIs = styled.h2`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.2rem;
    position: relative;
    bottom: 1.5rem;
    font-weight: bolder;
    color: pink;
    text-shadow: -1.1px 0 black, 0 1.1px black, 1.1px 0 black, 0 -1.1px black;

    @media screen and (max-width: 53.125rem) {
        font-size: 1rem;
    }

    @media screen and (max-width: 26.563rem) {
        font-size: 0.8rem;
    }   
`

const UnorderedList = styled.ul`
    position: relative;
    right: 1.3rem;
    bottom: 3.5rem;

    @media screen and (max-width: 48rem) {
        position: relative;
        right: 1.5rem;
    }
`

const Text = styled.p`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 0.875rem;
    font-weight: bolder;
    color: black;
`

const ButtonLine = styled.div`
    display: flex;
    position: relative;
    bottom: 4.5rem;


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

const ReturnHomeButton = styled.button`
    background-color: pink;
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 0.875rem;
    padding: 0.5rem;
    margin: 0.2rem;
    width: 6.5rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
    position: relative;
    top: 1rem;
    right: 0.4rem;

    @media screen and (max-width: 54.375rem) {
        position: relative;
        top: -0.2rem;
    }

    @media screen and (max-width: 53.125rem) {
        font-size: 0.875rem;
        width: 7.5rem;
    }

    @media screen and (max-width: 23.438rem) {
        position: relative;
        top: 0.5rem;
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
            <HowToPlayBackground>
                <CardWrapper>
                    <StyledHowToPlay>
                        <HowToPlayTitle>
                            How To Play
                        </HowToPlayTitle>
                        <WhatTheGameIs>
                        Bingemasters is a single player trivia game where players guess the name of the actor that appears on screen.
                        </WhatTheGameIs>
                        <UnorderedList>
                            <li>
                                <Text>
                                    Players have 60 seconds to guess the actor in question. Depending on the difficulty, you will have either mulitple choice options to choose from or an input field to enter the actor's name.
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    Correct answers are worth 1 point and spelling is of vital importance when typing in names. The slightest error will be punished mercilessly!
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    The goal of the game is to record the highest streak of correct answers and the highest streaks of all-time will be kept on the global leaderboard.
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    The game will end if your timer reaches zero or you select the wrong actor in multiple choice. But don't fret! You can just play again!
                                </Text>
                            </li>
                            </UnorderedList>
                        <ButtonLine>
                            <ReturnHomeButton 
                                type="submit"
                                onClick={this.handleClickReturn.bind(this)}
                                >Return Home      
                            </ReturnHomeButton>
                        </ButtonLine>
                    </StyledHowToPlay>
                </CardWrapper>
            </HowToPlayBackground>
        )} else {
            return <HomePage/> 
}}}

export default Instructions;