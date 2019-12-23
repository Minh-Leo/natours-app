const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Catch UNCAUGHT EXCEPTION errors
process.on('uncaughtException', err => {
  console.log('HEREEE ', err.name, err.message);
  console.log('UNCAUGHT EXCEPTION!?!?!? Shutting downnnn..');
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('DB connect successful');
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log('App runniiiing on port 3000')
);

// Error that not belong to other categories, unhandled Rejection
process.on('unhandledRejection', err => {
  console.log('HEREEE ', err.name, err.message);
  console.log('UNHANDLER REJECTION!?!?!? Shutting downnnn..');
  server.close(() => {
    process.exit(1);
  });
});

// Heroku daily SIGTERM, shutdow app every 24h to keep it healthy
process.on('SIGTERM', () => {
  console.log('SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('Process terminated!');
  });
});
