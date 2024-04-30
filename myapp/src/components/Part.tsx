import { CoursePart } from "../types"

const Part = ({coursePart}: {coursePart: CoursePart}) => {

  const assertNever = (value: unknown): never => {
    throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`)
  }

  switch (coursePart.kind) {
    case 'basic':
      return (<>{coursePart.description}</>)
    case 'background':
      return (
        <>
          <p>{coursePart.description}</p>
          <p>{coursePart.backgroundMaterial}</p>
        </>
      )
    case 'group':
      return (
        <>project exercises {coursePart.groupProjectCount}</>
      )
    case 'special':
      return (
        <>
          <p> {coursePart.description}</p>
          <p>required skills: {coursePart.requirements.join(", ")}</p>
        </>
      )
    default:
      assertNever(coursePart)
  }
}

export default Part