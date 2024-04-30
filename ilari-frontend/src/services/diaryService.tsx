import axios, {AxiosError} from 'axios'
import { NewDiaryEntry } from '../types'

const baseUrl = 'http://localhost:3000/api/diaries/'

const getData = () => {
  return axios.get(baseUrl)
}

const addNewDiary = (object: NewDiaryEntry)  => {
  return axios.post(baseUrl, object)
    .then(response => response.data)
    .catch((error: Error | AxiosError) => {
      if (axios.isAxiosError(error)) {
        return error.response?.data
      } else {
        return error.message
      }
    })
}

export default {
  getData,
  addNewDiary
}