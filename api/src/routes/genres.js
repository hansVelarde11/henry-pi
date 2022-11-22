const { APIKEY } = process.env;
import { Router } from 'express';
const router = Router();
import axios from 'axios';
require('dotenv').config();
import { Genre } from '../db';

router.get('/', async (req, res) => {
    try {
        //los voy a buscar a la API
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${APIKEY}`);
        const genres = response.data.results; // recibo un array de objetos, con los juego filtrados por GENERO
        //los guardo en la DB filtrando solo el nombre
        genres.forEach(async gen => {
            await Genre.findOrCreate({
                where: {
                    name: gen.name
                }
            })
        })
        //(OPTIMIZADO) --> SOLO ENVIO AL FRONT LA INFO NECESARIA (nombre de los generos)
        const genresREADY = genres.map(game => {
            return{
                id: game.id,
                name: game.name
            }
        });
        res.json(genresREADY)
    } catch (err) {
        return console.log(err)
    }
})

export default router;
