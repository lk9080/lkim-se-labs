import { Router } from 'express';
import GamesController from '../controllers/games-controller.js';

var router = Router();

const gamesController = new GamesController();

router.get("/games", function (req, res) {
    gamesController.getAllGames(req, res);
})

export default router;