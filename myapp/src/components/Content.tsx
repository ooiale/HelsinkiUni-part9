import { CoursePart } from "../types"
import Part from "./Part"

const Content = ({courseParts}: {courseParts: CoursePart[]}) => {
  return (
    <>
      {courseParts.map(p => {
        return (
          <div key={p.name}>
            <h2>{p.name} {p.exerciseCount}</h2>
            <Part coursePart={p}/>
          </div>
        )
      })}
    </>
  )
}

export default Content