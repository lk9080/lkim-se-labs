import GamesServices from '../services/games-services.js';

const gamesService = new GamesServices();



export default class GamesController {
    getAllGames(req, res) {
        let games = gamesService.getAllGames();
        let publisher = req.query.publisher;
        let genre = req.query.genre;
        let title = req.query.title;
        if (publisher)
            games = games.filter(game => game.publisher.toLowerCase() == publisher.toLowerCase());
        if (genre)
            games = games.filter(game => game.genre.includes(genre));
        if (title)
            games = games.filter(game => game.title.toLowerCase().includes(title.toLowerCase()));
        res.json(games);
    }
}