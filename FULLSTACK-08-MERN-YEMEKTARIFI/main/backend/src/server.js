import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv/config';
import { db } from './db';
import { routes } from './routes';

const app = express();

app.use(bodyParser.json());

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

const start = async () => {
    await db.connect(process.env.MONGO_URI);
    app.listen(8080,() => {
        console.log('Server is listening on port 8080');
    });
}

start();