import express from 'express';
import cors from 'cors';
import diaryRouter from './routes/diaries';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('PING');
  res.send('pong');
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});