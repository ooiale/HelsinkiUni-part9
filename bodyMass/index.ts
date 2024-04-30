import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('hello fullstack');
});

app.get('/bmi',  (req,res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (isNaN(height) || isNaN(weight)) {
    res.status(400).json({ error: 'Malformatted parameters' });
  }
  const bmi = calculateBmi(height, weight);
  res.send({height, weight, bmi});
});

app.post(('/exercises'), (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {daily_exercises, target} = req.body;

  if (!daily_exercises || !target) {
    res.status(400).json({
      error: "parameters missing"
    });
  }

  const isNumberArray = (arr: unknown[]): boolean => {
    for (const item of arr) {
      if (isNaN(Number(item))) {
        return false; 
      }
    }
    return true; 
  };

  if (!isNumberArray(daily_exercises as unknown[]) || isNaN(Number(target))) {
    return res.status(400).json({
      error: "malformatted parameters"
    });
  }
  

  return res.send(calculateExercises(daily_exercises as number[], target as number));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
