export default class GamesService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async getGames() {
        let response = await fetch(this.baseUrl + "/api/games");
        let games = await response.json();
        return games;
    }
}