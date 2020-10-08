import TokenService from './token-service';
import config from '../config';

const UserApiService = {
  getUser(userId) {
    return fetch(`${config.API_ENDPOINT}/user/${userId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },
}

export default UserApiService;