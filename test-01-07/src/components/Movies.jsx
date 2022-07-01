import Movie from './Movie';
import './movies.css';

const MoviesFakeData = [
    {
        name: 'Movie Name',
        iconUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg'
    },
    {
        name: 'Movie Name',
        iconUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg'
    },
    {
        name: 'Movie Name',
        iconUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg'
    },
    {
        name: 'Movie Name',
        iconUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg'
    },
    {
        name: 'Movie Name',
        iconUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg'
    },
    {
        name: 'Movie Name',
        iconUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg'
    },
    {
        name: 'Movie Name',
        iconUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg'
    },
    {
        name: 'Movie Name',
        iconUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg'
    },
    {
        name: 'Movie Name',
        iconUrl: 'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg'
    },
]

function Movies() {
    return (
        <div id="container">
            {MoviesFakeData.map((movie) => <Movie class="item" movie={movie} />)}
        </div>
    )
}

export default Movies;
