import config from './config';

const pmQuestionApiService = {
  getPreMadeQuestions() {
    return fetch(`${config.API_ENDPOINT}/preMadeQuestions`, {
      headers: {        
      },      
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getPreMadeQuestion(questionId) {
    return fetch(`${config.API_ENDPOINT}/preMadeQuestions/${questionId}`, {
      headers: {        
      },
    })
    .then(res => 
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },

  getPreMadeAnswers() {
    return fetch(`${config.API_ENDPOINT}/preMadeAnswers`, {
      headers: {        
      },
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getPreMadeAnswersByQuestionId(questionId) {
    return fetch(`${config.API_ENDPOINT}/preMadeAnswers/${questionId}`,{
      headers: {        
      },
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },
}

export default pmQuestionApiService;