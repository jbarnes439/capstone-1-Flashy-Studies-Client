
import config from '../config';

const PreMadeQuizService = {
  getAllQuestions() {
    return fetch(`${config.API_ENDPOINT}/preMadeQuestions`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )      
  },   

  getAllAnswers() {
    return fetch(`${config.API_ENDPOINT}/preMadeAnswers`)
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  }
}

export default PreMadeQuizService;

