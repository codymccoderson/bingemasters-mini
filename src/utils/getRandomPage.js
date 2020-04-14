import loadData from '../utils/loadData';
import randomizer from '../utils/randomizer';

const getRandomPage = async () => {

    try {
        const randomPage = randomizer(1, 500);
        const url = `https://api.themoviedb.org/3/person/popular?api_key=0923dd9b4328f2ddced216cb32ecf851&language=en-US&page=${randomPage}`;
        const data = await loadData(url); 
        return data;
    }   catch (error) {
        console.log(error, "Whoops!")
    }   
} 

export default getRandomPage;