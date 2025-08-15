import {Request, Response} from 'express';
import {serve} from 'inngest/express';
import {inngest, functions} from './inngest/index';
import {logger} from './utils/logger'
import { log } from 'console';
const express = require('express');

const app = express();

const PORT = 3001;

app.use("/api/inngest", serve({client: inngest, functions}));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/api/chat', (req: Request, res: Response) => {
  res.send('Hi, how can I help you?');
});

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const startServer = async () => {
  try{
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      logger.info(`Server is running on http://localhost:${PORT}`);
      logger.info(`Inngest endpoint available at http://localhost:${PORT}/api/inngest`);
    });
  } catch (error) {
    logger.error("Error starting server:", error);
    process.exit(1);
  }
}

startServer();
