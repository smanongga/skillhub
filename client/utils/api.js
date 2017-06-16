import request from 'superagent'
import AuthService from './auth0'

const baseUrl = '/api/v1'

export default function consume (method = 'get', endpoint, data = {}) {
  const dataMethod = method.toLowerCase() === 'get' && 'query' && 'send'
  const token = AuthService.getToken()
  const headers = {
    Accept: 'application/json'
  }
  if (AuthService.loggedIn()) {
    headers['Authorization'] = `Bearer ${token}`
  }
  return request[method](baseUrl + endpoint)
    .set(headers)[dataMethod](data)
    .then((res) => {
      return res
    })
    .catch(err => {
      throw err
    })
}

export function getProfileById (id, callback) {
  request.get(`/api/v1/profile/${id}`)
  .end((err, res) => {
    if (err) {
      callback(err)
    } else {
      callback(null, res.body.result)
    }
  })
}

export function getAllCategories (callback) {
  request.get('/api/v1/categories')
  .end((err, res) => {
    if (err) {
      callback(err)
    } else {
      callback(null, res.body)
    }
  })
}
