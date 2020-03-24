import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import apiRouter from './routes';
import logger from './middleware/logger';

const app: express.Application = express();

// Init middleware
app.use(logger);

app.use(cors())
// body-parser (express middleware) that reads a form's input and stores it as a javascript object accessible through req.body
app.use(bodyParser.json());

app.use(express.static('public'));
// API Routes
app.use('/api', apiRouter);

const port: number = Number(process.env.PORT) || 8000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
