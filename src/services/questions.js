import axios from 'axios'
const baseUrl = 'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple'

const getQuestions = () => {
   const request = axios.get(baseUrl)
   return request.then(response => response.data)
}

export default { getQuestions }