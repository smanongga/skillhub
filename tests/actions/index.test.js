import '../setup-dom'
import test from 'ava'
import {error, updateProfile} from '../../client/actions/index.js'

test('error returns object with type ERROR_MESSAGE', t => {
  const message = 'message'
  const actual = error(message)
  const expected = {
    type: 'ERROR_MESSAGE',
    errorMessage: message
  }
  t.deepEqual(actual, expected)
})

test('updateProfile returns a profile to the store', t => {
  const text = {
      id: 14,
      userName: '',
      firstName: 'John',
      lastName: 'Snow',
      email: 'john@thewall.com',
      photoUrl: 'text.profilePic',
      locationCity: 'Westoros',
      bio: 'text.bio,',
      skillsOffered: 'text.skillsOffered',
      skillsWanted: 'text.skillsWanted'
  }
  const actual = updateProfile(text)
  const expected = {
    type: 'UPDATE_PROFILE',
    updatedProfile: {
      id: text.id,
      userName: '',
      firstName: text.firstName,
      lastName: text.lastName,
      email: text.email,
      photoUrl: text.profilePic,
      locationCity: text.locationCity,
      bio: text.bio,
      skillsOffered: text.skillsOffered,
      skillsWanted: text.skillsWanted
    }
  }
  t.deepEqual(actual, expected)
})
