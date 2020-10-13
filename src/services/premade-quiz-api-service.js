
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
  },

  getAllCorrectAnswers() {
    return fetch(`${config.API_ENDPOINT}/preMadeAnswers/correct`)
    .then(res =>
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
    )
  },

  getAllTopics() {
    return fetch(`${config.API_ENDPOINT}/preMadeQuestions/distinct/topics`)
    .then(res =>
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
    )
  },

  getQuestionsByTopic(topic) {
    return fetch(`${config.API_ENDPOINT}/preMadeQuestions/questions/${topic}`)
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
    )
  },

}

export default PreMadeQuizService;

