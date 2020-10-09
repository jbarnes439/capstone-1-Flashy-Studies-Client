import config from '../config';

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },

  saveUsername(username) {
    window.localStorage.setItem(config.USERNAME, username)
  },

  getUsername() {
    return window.localStorage.getItem(config.USERNAME)
  },

  clearUsername() {
    window.localStorage.removeItem(config.USERNAME)
  },

  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },

  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },

  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },

  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
};

export default TokenService;