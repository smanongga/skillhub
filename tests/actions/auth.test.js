import '../setup-dom'
import test from 'ava'
import {logoutSuccess} from '../../client/actions/logout.js'
import {receiveLogin, loginError} from '../../client/actions/loginauth0.js'

test('logoutSuccess returns object with type LOGIN_REQUEST', t => {
  const actual = logoutSuccess()
  const expected = { type: 'LOGOUT_SUCCESS' }
  t.deepEqual(actual, expected)
})

test('receiveLogin returns object with type RECEIVE_LOGIN', t => {
	const user = 'user'
  const actual = receiveLogin(user)
  const expected = { type: 'LOGIN_SUCCESS', 
	isAuthenticated: true,
	user }
  t.deepEqual(actual, expected)
})

test('loginError returns object with type LOGIN_ERROR', t => {
  const err = 'error'
  const actual = loginError(err)
  const expected = { 
		type: 'LOGIN_ERROR',  
	 	isFetching: false,
    isAuthenticated: false,
		 err }
  t.deepEqual(actual, expected)
})
