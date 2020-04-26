import loadData from './loadData';
import randomizer from './randomizer';

//The Refactor

const getCorrectActor = async () => {
    const randomPage = randomizer(1, 500);
    const url = `https://api.themoviedb.org/3/person/popular?api_key=0923dd9b4328f2ddced216cb32ecf851&language=en-US&page=${randomPage}&limit=1`;
    const data = await loadData(url);
    let correctActor = await data.results;
    return await correctActor
  };

export default getCorrectActor;


