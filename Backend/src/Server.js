const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

async function start() {
  try {
    await mongoose.connect(config.mongoUri);
    console.log('MongoDB connected');
    const PORT = process.env.PORT || config.port || 3000;

    const server = app.listen(config.port, () => {
      console.log(`Server listening on port ${config.port} in ${config.nodeEnv} mode`);
    });

  
    process.on('SIGINT', async () => {
      console.log('SIGINT received — closing server');
      await mongoose.disconnect();
      server.close(() => process.exit(0));
    });

    process.on('SIGTERM', async () => {
      console.log('SIGTERM received — closing server');
      await mongoose.disconnect();
      server.close(() => process.exit(0));
    });

  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
}

start();
