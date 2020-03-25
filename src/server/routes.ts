import * as express from 'express';
import * as bcrypt from 'bcrypt';
import * as knex from 'knex';
import { handleSignin, handleRegister, handleLogout } from './controllers/auth';
import { handleGetComplains, handlePostComplains, handleUpdateComplainsStatus } from './controllers/complains';

const db = knex({
    client: 'pg',
    connection: () => {
        return {
          host : '127.0.0.1',
          user : 'postgres',
          password : 'test',
          database : 'postgres',
          port: '5435'
    }}
});

const router = express.Router();

// For Testing
router.get('/hello', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.json('Hello World');
    next();
});

// APIs
router.post('/signin', (req, res) => { handleSignin(req, res, db, bcrypt) });
router.post('/register', (req, res) => { handleRegister(req, res, db, bcrypt) });
router.put('/logout/:id', (req, res) => { handleLogout(req, res, db, bcrypt) });
router.get('/complains', (req, res) => { handleGetComplains(req, res, db) });
router.post('/complains', (req, res) => { handlePostComplains(req, res, db) });
router.put('/complains/:id', (req, res) => { handleUpdateComplainsStatus(req, res, db) });

export default router;