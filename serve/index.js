import express from 'express';
import cors from 'cors';
import Correios from 'correios.js';

const app = express();
app.use(cors());

const PORT = 3002;

const correios = new Correios();


app.get('/', (req, res) => {
    const { rastreamento } = req.query;
    if (typeof rastreamento === 'string' && rastreamento !== '') {
        correios.track(`${rastreamento}`).then((response) => {
            let { events } = response;
            res.json(events);


        }).catch((error) => {
            res.json({ message: 'error', error });
        });
    }


});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
