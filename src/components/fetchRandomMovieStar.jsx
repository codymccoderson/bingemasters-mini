import React from 'react';

class FetchRandomMovieStar extends React.Component {

    state = {
        loading: true,
        star: null,
        userGuessInput: ""

    };

    async componentDidMount() {
        const randomPageFunction = function randomPage(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        };
        const randomPage = randomPageFunction(1, 500);
        console.log(randomPage);
        const url = `https://api.themoviedb.org/3/person/popular?api_key=0923dd9b4328f2ddced216cb32ecf851&language=en-US&page=${randomPage}`;
        const response = await fetch(url);
        const data = await response.json();
        const randomActorSelector = randomPageFunction(1, 20);

        this.setState({
            star: data.results[randomActorSelector].profile_path, 
            loading: false
        });
        console.log(data.results[randomActorSelector].profile_path);
        console.log(data.results[randomActorSelector].name);
    };

    render() {
        const imageURL = `https://image.tmdb.org/t/p/w235_and_h235_face${this.state.star}`;
        return(
            <div>
                {this.state.loading || !this.state.star ? (
                <div>loading...</div> 
                ) : (
                <div>
                    <img src={imageURL} alt="this... is a random actor"/>
                </div>
                )}
                <div>
                    <form>
                        <input 
                        type="text"
                        placeholder="Name this actor."
                        />
                        <button type="submit">Final Answer?</button>
                    </form>
                </div>
            </div>
        )
    }

};

export default FetchRandomMovieStar;


//     // handleChange = event => {
//     //     this.setState({
//     //         userGuessInput: event.target.value
//     //     })
//     // }

//     // handleFinalAnswer = async () => {
//     //     const newActorData = await this.loadData();
//     //     if(randomActorName === event.target.value) {
//     //         this.setState({
//     //             actorData: newActorData
//     //         })
//     //     } else {
//     //         this.setState({
//     //             actorData: actorData
//     //         })
//     //     }
//     // }
    
