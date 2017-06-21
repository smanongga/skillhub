import '../setup-dom'
import test from 'ava'
import {receiveMessages} from '../../client/actions/messages.js'

test('receiveMessages returns object with type LOGIN_REQUEST and a message', t => {
  const message = 'hello'
  const actual = receiveMessages(message)
  const expected = {
    type: 'MESSAGE_SUCCESS',
    response: message
  }
  t.deepEqual(actual, expected)
})
