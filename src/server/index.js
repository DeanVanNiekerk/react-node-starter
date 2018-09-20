const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));

let users = [
    { id: 1, firstName: 'Lloyd', lastName: 'Christmas' },
    { id: 2, firstName: 'Harry', lastName: 'Dunne' }
]
app.get('/api/users', (req, res) => res.send(users));

app.listen(8080, () => console.log('Listening on port 8080!'));
