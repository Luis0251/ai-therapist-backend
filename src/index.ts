import {Request, Response} from 'express';
const express = require('express');

const app = express();

const PORT = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});