import data from '../../data/diaries';
import { DiaryEntry, NonSensitiveDiaryEntry, NewDiaryEntry } from '../../types';


const getEntries = (): DiaryEntry[] => {
  return data;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return data.map(({id, date, weather, visibility, }) => {
    return({
      id,
      date,
      weather,
      visibility
    });
  });
};

const findById = (id: number): DiaryEntry | undefined => {
  const entry = data.find(d => d.id === id);
  return entry;
};

const addDiary = (diaryObject: NewDiaryEntry): DiaryEntry => {
  const newEntry: DiaryEntry = {
    ...diaryObject,
    id: Math.max(...data.map(d => d.id)) + 1,
  };
  data.push(newEntry);
  const noSensitiveNewEntry: NonSensitiveDiaryEntry = {
    id: newEntry.id,
    date: newEntry.date,
    weather: newEntry.weather,
    visibility: newEntry.visibility
  };
  return noSensitiveNewEntry;
};


export default {
  getEntries,
  addDiary,
  getNonSensitiveEntries,
  findById,
};