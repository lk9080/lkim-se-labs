import express from 'express';
import cors from 'cors';
import gamesRoute from './routes/games-route.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: "json"};;

const app = express();
app.use(cors());
app.use('/', express.static('public'))
app.use('/api', gamesRoute);

app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

app.listen(3000, function(){
    console.log("I'm actively listening at PORT 3000.............");
})