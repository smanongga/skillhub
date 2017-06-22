import request from 'superagent'
import AuthService from './auth0'

import { get } from './localstorage'

const baseUrl = '/api/v1'

export default function consume (method = 'get', endpoint, data = {}) {
  const dataMethod = method.toLowerCase() === 'get' && 'query' || 'send'
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

export function uploadImage (file, callback) {
  request.post('https://api.cloudinary.com/v1_1/dnyp01dqk/upload')
    .field('upload_preset', 'gam3msqv')
    .field('file', file)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else if (res.body.secure_url !== '') {
        callback(null, res.body.secure_url)
      }
    })
}
