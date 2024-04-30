import express from 'express';
import diaryService from '../services/diaryService';
import  toNewDiaryEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryService.getNonSensitiveEntries());
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id); 
  res.send(diaryService.findById(id));
});

router.post('/', (req, res) => {
  try {
    const newEntry = toNewDiaryEntry(req.body);
    const addedEntry = diaryService.addDiary(newEntry);
    res.json(addedEntry);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    }
  }
});

export default router;