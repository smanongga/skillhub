import '../setup-dom'
import test from 'ava'
import {logoutSuccess} from '../../client/actions/logout.js'

test('requestLogin returns object with type LOGIN_REQUEST', t => {
  const actual = logoutSuccess()
  const expected = { type: 'LOGOUT_SUCCESS' }
  t.deepEqual(actual, expected)
})
