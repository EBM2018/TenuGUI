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
  (async () => {
    const umzugMig = new Umzug(umzugConfig('migrations'));
    await umzugMig.up(); // Execute pending migrations
    console.log('Database migrated'); // TODO: Indicate if changes were made

    const umzugSed = new Umzug(umzugConfig('seeders'));
    await umzugSed.up(); // Execute pending seeders
    console.log('Database seeded');

    server.listen(config.app.port, (err) => {
      if (err) console.error(err);
      else console.log(`Listening on port ${config.app.port}`);
    });
  })();
}

module.exports = server;

