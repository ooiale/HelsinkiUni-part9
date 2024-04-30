import { useState } from "react"
import diaryService from "../services/diaryService"
import { NewDiaryEntry, NonSensitiveDiaryEntry, Visibility, Weather } from "../types"


const DiaryForm = ({diary, setDiary, setNotification}: {diary:NonSensitiveDiaryEntry[] ,setDiary: React.Dispatch<React.SetStateAction<NonSensitiveDiaryEntry[]>>, setNotification: React.Dispatch<React.SetStateAction<string>>}) => {
  const [date, setDate] = useState('')
  const [visibility, setVisibility] = useState('')
  const [weather, setWeather] = useState('')
  const [comment, setComment] = useState('')

  const addEntry = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    const newEntry = {
      date,
      visibility,
      weather,
      comment
    } as NewDiaryEntry;
    const addedDiary = await diaryService.addNewDiary(newEntry)

    if (typeof addedDiary === 'string') {
      setNotification(addedDiary)
      setTimeout(() => setNotification(''), 3000)
    } else if (typeof addedDiary === 'object') {
      setDiary(diary.concat(addedDiary))
    }

  }

  const visibilityOptions = Object.values(Visibility)
  const weatherOptions = Object.values(Weather)

  return (
    <form onSubmit={addEntry}>
      <div>
        date<input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        visiblity: 
        {visibilityOptions.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={visibility === option}
              onChange={() => setVisibility(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <div>
        weather: 
        {weatherOptions.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={weather === option}
              onChange={() => setWeather(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <div>
        comment<input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button type="submit"> add </button>
    </form>
  )
}

export default DiaryForm