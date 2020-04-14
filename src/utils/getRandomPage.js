import loadData from '../utils/loadData';
import randomizer from '../utils/randomizer';

const getRandomPage = async () => {

        const randomPage = randomizer(1, 500);
        const url = `https://api.themoviedb.org/3/person/popular?api_key=0923dd9b4328f2ddced216cb32ecf851&language=en-US&page=${randomPage}`;
        const data = await loadData(url); 
        const actor = data.results[randomizer(1, 20)];
        const randomActorPhotoPath = actor.profile_path || "" || undefined || null;
        const movieTheyWereIn = actor.known_for[0].title || "" || undefined || null;
        const secondMovieTheyWereIn = actor.known_for[1].title || "" || undefined || null;
        if (randomActorPhotoPath === actor.profile_path && movieTheyWereIn === actor.known_for[0].title && secondMovieTheyWereIn === actor.known_for[1].title) {
            return actor;
        } else {
            getRandomPage();
        }
        
} 

export default getRandomPage;