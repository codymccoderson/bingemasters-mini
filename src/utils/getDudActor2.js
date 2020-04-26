import loadData from './loadData';
import randomizer from './randomizer';
import getCorrectActor from './getCorrectActor';

const getDudActor2 = async () => {

  let correctActor = await getCorrectActor();

  const randomPage = randomizer(1, 500);
  const url = `https://api.themoviedb.org/3/person/popular?api_key=0923dd9b4328f2ddced216cb32ecf851&language=en-US&page=${randomPage}&limit=1`;
  const data = await loadData(url);
  let dudActor2 = await data.results[randomizer(1, 20)];
  if (await dudActor2 === undefined && await dudActor2.known_for_department !== "Acting" && await dudActor2.gender !== await correctActor.gender) {
    dudActor2 = await data.results[randomizer(1,20)];
  } 
  return await dudActor2;
}

export default getDudActor2;