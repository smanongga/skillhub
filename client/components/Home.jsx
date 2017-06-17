import React from 'react'
import Login from './Login'

class Home extends React.Component {
  render () {
    return (
    <div className='container'>
      <h2>Welcome to SkillHub</h2>
      <p>Teach. Learn. Connect. </p>
      <br></br>
      <ul>
        <li> <a href='/categories'>See what you can learn</a></li>
        <li> <a href='/profile/edit'> Share your skills with somone</a></li>
        <li> <a href='/login'>Sign up to Teach, Learn and Connect</a></li>
      </ul>
    </div>
    )
  }
}

export default Home
