import { NonSensitiveDiaryEntry } from "../types"

const DiaryEntry = ({entries}: {entries: NonSensitiveDiaryEntry[]}) => {
  return (
    <>
      <h2> Diary Entries </h2>
      {entries.map( e => {
        return (
          <div key={e.id}>
            <h3> {e.date}</h3>
            <p> visibility: {e.visibility}</p>
            <p> weather: {e.weather} </p>
          </div>
        )
      })}
    </>
  )
}

export default DiaryEntry