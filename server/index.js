const express = require('express');
const { json } = require('body-parser');
let port = 3000;

// Controllers
const { create, read, update, destroy } = require('./controllers/message_controller');

const app = express();
app.use(json());
app.use(express.static('./../public/build'));

const baseURL = '/api/messages';
app.get(baseURL, read);
app.post(baseURL, create);
app.put(baseURL + '/:id', update);
app.delete(baseURL + '/:id', destroy);

app.listen( port, () => { console.log(`Server is listening to port ${port}`)});