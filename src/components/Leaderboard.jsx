import React from 'react';
import styled from 'styled-components';
import another_retro_tv from '../another_retro_tv.png';
import HomePage from './HomePage';
import tv_static2 from '../tv_static2.jpg';

const StartGameBackground = styled.div`
    background: url(${another_retro_tv}) no-repeat center center fixed;
    background-size: 80vw 92vh;
    height: 100vh;
    font-size: 16px; 

    @media screen and (max-width: 53.123rem) {
        background: url(${tv_static2}) no-repeat center center fixed;
        background-size: cover;
        height: 100vh;

    }
`
const StyledStartGame = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 43.75rem;
    height: 43.75rem;
    margin: 0 auto;
    position: relative;
    top: 6.25rem;
    right: 9.375rem;

    @media screen and (max-width: 89.375rem) {
        margin: 0 24.375rem;
        width: 43.75rem;
        height: 43.75rem;

    }

    @media screen and (max-width: 87.5rem) {
        margin: 0 23.75rem;
        width: 41.25rem;
        height: 41.25rem;

    }
    @media screen and (max-width: 86.875rem) {
        margin: 0 23.125rem;
        width: 38.75rem;
        height: 38.75rem;
    }

    @media screen and (max-width: 83.75rem) {
        width: 36.25rem;
        height: 36.25rem;
    }

    @media screen and (max-width: 80.625rem) {
        margin: 0 22.5rem;
        width: 33.75rem;
        height: 33.75rem;
    }

    @media screen and (max-width: 77.5rem) {
        width: 31.25rem;
        height: 31.25rem;
    }

    @media screen and (max-width: 74.375rem) {
        width: 28.75rem;
        height: 28.75rem;
    }

    @media screen and (max-width: 71.25rem) {
        width: 26.25rem;
        height: 26.25rem;
    }

    @media screen and (max-width: 68.125rem) {
        margin: 0 21.25rem;
    }

    @media screen and (max-width: 65rem) {
        width: 25rem;
        height: 25rem;
    }

    @media screen and (max-width: 61.875rem) {
        margin: 0 19rem;
        width: 23.75rem;
        height: 23.75rem;
    }

    @media screen and (max-width: 58.75rem) {
        width: 22.5rem;
        height: 22.5rem;
    }

    @media screen and (max-width: 55.625rem) {
        margin: 0 18.25rem;
        width: 21.25rem;
        height: 21.25rem;
    }

    @media screen and (max-width: 53.125rem) {
        margin: 0 17.5rem;
        width: 30rem;
        height: 30rem;
    }

    @media screen and (max-width: 49.375rem) {
        margin: 0 16.25rem;
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

    @media screen and (max-width: 41.6rem) {
        margin: 0 11.5rem;
        width: 25rem;
        height: 25rem;
    }

    @media screen and (max-width: 40rem) {
        margin: 0 10rem;
    }
`;

const LeaderboardTitle = styled.h1`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 2.5rem;
    text-align: center;
    position: relative;
    left: 0.938rem;

    @media screen and (max-width: 87.5rem) {
        font-size: 2rem;
        position: relative;
        left: 2rem
    }

    @media screen and (max-width: 75rem) {
        font-size: 1.5rem;
        position: relative;
        left: 3rem;
    }

    @media screen and (max-width: 62.5rem) {
        position: relative;
        left: 3.5rem;
    }

    @media screen and (max-width: 53.125rem) {
        position: relative;
        left: 2rem;
    }
`;

const LeaderboardTable = styled.table`
    list-style-type: none;
    position: relative;
    left: 11.5rem;

    @media screen and (max-width: 75rem) {
        position: relative;
        left: 11.25rem;
    }

    @media screen and (max-width: 53.125rem) {
        position: relative;
        left: 10rem;
    }

    th {
        -webkit-columns: 2;
        -moz-columns: 2;
        columns: 2;
        -webkit-column-gap: 18rem;
        -moz-column-gap: 18rem;
        column-gap: 18rem;
        font-weight: bolder;
        font-size: 1rem;

        @media screen and (max-width: 87.5rem) {
            -webkit-column-gap: 16rem;
            -moz-column-gap: 16rem;
            column-gap: 16rem;
        }

        @media screen and (max-width: 81.25rem) {
            -webkit-column-gap: 15rem;
            -moz-column-gap: 15rem;
            column-gap: 15rem;
        }

        @media screen and (max-width: 75rem) {
            -webkit-column-gap: 12rem;
            -moz-column-gap: 12rem;
            column-gap: 12rem;
        }
    }

    td {
        font-size: 1rem;
        font-weight: bolder;
        color: pink;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
    
`


const ButtonLine = styled.div`
    display: flex;
`

const ReturnHomeButton = styled.button`
    background-color: pink;
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 0.875rem;
    padding: 0.625rem;
    margin: 0.313rem;
    width: 7rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
    position: relative;
    top: 1rem;

    @media screen and (max-width: 75rem) {
        position: relative;
        left: 2.5rem;
    }
     
    @media screen and (max-width: 53.125rem) {
        width: 7rem;
        position: relative;
        left: 1.5rem;
    }
`;

class Leaderboard extends React.Component {

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
                    <div className="LeaderboardWrapper">
                        <LeaderboardTitle>
                            Greatest Bingemasters
                        </LeaderboardTitle>
                        <LeaderboardTable>
                            <thead>
                                <tr>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Streak
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        PGJ
                                    </td>
                                    <td>
                                        20
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        WPM
                                    </td>
                                    <td>
                                        19
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        GPN
                                    </td>
                                    <td>
                                        18
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        AMU
                                    </td>
                                    <td>
                                        17
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        NBV
                                    </td>
                                    <td>
                                        16
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        GGG
                                    </td>
                                    <td>
                                        15
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        VHY
                                    </td>
                                    <td>
                                        14
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        REB
                                    </td>
                                    <td>
                                        13
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        CSS
                                    </td>
                                    <td>
                                        12
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        XML
                                    </td>
                                    <td>
                                        11
                                    </td>
                                </tr>
                            </tbody>
                        </LeaderboardTable>
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

export default Leaderboard;