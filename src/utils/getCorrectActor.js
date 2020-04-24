import loadData from './loadData';
import randomizer from './randomizer';

const getCorrectActor = async () => {
    const randomPage = randomizer(1, 500);
    const url = `https://api.themoviedb.org/3/person/popular?api_key=0923dd9b4328f2ddced216cb32ecf851&language=en-US&page=${randomPage}&limit=1`;
    const data = await loadData(url);
    let correctActor = await data.results[randomizer(1, 20)];
    if (await correctActor === undefined || await correctActor.known_for_department !== "Acting" || await correctActor.known_for[0].original_language !== "en" || await correctActor.known_for[1].original_language !== "en") {
      correctActor = await data.results[randomizer(1,20)]
    } 
    return await correctActor
  };
  
export default getCorrectActor;