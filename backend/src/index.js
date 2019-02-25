const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');

const app = express();
const server = require('http').Server(app);
const helmet = require('helmet');

const Umzug = require('umzug');
const umzugConfig = require('./config/umzug.js');

const config = require('./config');

app.use(helmet());
app.use(bodyParser.json());
app.use('/api', require('./api'));

app.use(serveStatic('./public'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

if (process.env.NODE_ENV !== 'testing') {
  server.listen(config.app.port, (err) => {
    if (err) console.error(err);
    else console.log(`Listening on port ${config.app.port}`);
  });
}

// TODO: Move server listening after migrations with a proper promises chain
const umzugMig = new Umzug(umzugConfig('migrations'));
umzugMig.up().then(() => console.log('Database migrated')); // Execute pending migrations
const umzugSed = new Umzug(umzugConfig('seeders'));
umzugSed.up().then(() => console.log('Database seeded')); // Execute pending seeders

module.exports = server;
