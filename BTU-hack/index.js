
const express = require('express');
const mongoose = require('mongoose');
/*const {
  auth, users, account, transaction, rewards,
} = require('./routes');*/

const app = express();
const router = express.Router();

app.use(express.json());

// monzo setup
app.use('/auth', auth);
app.use('/users', users);
app.use('/account', account);

// hello world
app.get('/', (req, res) => res.json({ hello: 'world!' }));

