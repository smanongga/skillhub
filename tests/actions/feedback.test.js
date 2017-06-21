import '../setup-dom'
import test from 'ava'
import {receiveFeedback} from '../../client/actions/feedback.js'

test('receiveFeedback returns object with type FEEDBACK_SUCCESS and a message', t => {
  const feedback = 'feedback'
  const actual = receiveFeedback(feedback)
  const expected = {
    type: 'FEEDBACK_SUCCESS',
    response: feedback
  }
  t.deepEqual(actual, expected)
})
