import { useState, useEffect } from 'react'
import diaryService from './services/diaryService'
import { NonSensitiveDiaryEntry } from './types'

import DiaryEntry from './components/DiaryEntries'
import DiaryForm from './components/DiaryForm'
import Notification from './components/Notification'

function App() {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([])
  const [notification, setNotification] = useState('')

  useEffect(() => {
    diaryService.getData().then(response => setDiaries(response.data))
  }, [])

  console.log(diaries)

  return (
    <>
    <DiaryForm diary={diaries} setDiary={setDiaries} setNotification={setNotification}/>
    <Notification message={notification}/>
    <DiaryEntry entries={diaries}/>
    </>
  )
}

export default App
