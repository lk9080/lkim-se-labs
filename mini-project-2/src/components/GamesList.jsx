import { useState, useEffect } from "react";
import GamesService from "../services/games-service";
import '../css/games-app.css'
import GamesFilter from "./GamesFilter";

const gamesService = new GamesService("http://localhost:3000");

export default function GamesList() {
    const [games, setGames] = useState([]);
    const [allGames, setAllGames] = useState([]);
    const [genres, setGenres] = useState([]);
    const [publishers, setPublishers] = useState ([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        gamesService.getGames()
            .then(gamesJsonData => {
                setGames(gamesJsonData);
                setAllGames(gamesJsonData);
                setGenres(getUniqueGenresList(gamesJsonData));
                setPublishers(getUniquePublishersList(gamesJsonData));
            })
            .catch(error => {
                setErrorMessage("Sorry, unable to connect to server. Please try again later!");
            })
    },
        []);

    const getUniqueGenresList = function (games) {
        const allGenresList = games.map(game => game.genre);
        const uniqueGenresList = [...new Set(allGenresList)];
        return uniqueGenresList;
    }

    const getUniquePublishersList = function (games) {
        const allPublishersList = games.map(game => game.publisher);
        const uniquePublishersList = [...new Set(allPublishersList)];
        return uniquePublishersList;
    }

    const applyFilters = function (title, genre, publisher) {
        let filteredGames = allGames.filter(game => 
            (title == "" || game.title.toLowerCase().includes(title.toLowerCase())) &&
            (genre == "" || game.genre.includes(genre)) &&
            (publisher == "" || game.publisher.includes(publisher))
        );
        setGames(filteredGames);
    }

    function getPlatformIcon(platform) {
        if (platform.includes("Windows"))
            return "W";
        if (platform.includes("Web Browser"))
            return "B";
        return "#";
    };

    let gamesListJsx = games.map(game => {
        return (
            <div class="game-card card grow mb-3 shadow h-md-250 video-card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-3 align-self-center mt-n2">
                            <div class="card">
                                <div class="image-wrapper">
                                    <img class="card-img-top" src={game.thumbnail} alt={game.short_description} />
                                </div>
                            </div>
                        </div>
                        <div class="col-7 col-sm-6 col-lg-7 align-self-center justify-content-center position-static">
                            <a href="/game-category" class="stretched-link no-underline">
                                <h4 class="card-title text-truncate mt-n2 mb-1">{game.title}</h4>
                            </a>
                            <div class="text-truncate text-muted mb-1">{game.short_description}</div>
                            <span class="badge badge-secondary text-dark mr-2">{game.genre}</span>
                        </div>
                        <div class="col-1 align-self-center text-center text-muted justify-content-center d-none d-sm-block">
                            <h5><i class="fab fa-windows">{getPlatformIcon(game.platform)}</i></h5>
                        </div>
                        <div class="col-1 justify-content-center text-center align-self-center">
                            <span class="badge badge-ftg py-2 px-2 mb-2">FREE</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <>
            {errorMessage && <h3>{errorMessage}</h3>}
            {!errorMessage &&
                <GamesFilter
                    genres={genres}
                    publishers={publishers}
                    onFilterChange={applyFilters}
                >
                </GamesFilter>}
            <div className="games-list-container">
                {gamesListJsx}
            </div>
        </>
    );
}
