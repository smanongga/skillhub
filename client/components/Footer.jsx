import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <footer>
        <div className='container'>
          <h2>Footer</h2>
          <ul>
            <li> <a href='/categories'>See what you can learn</a></li>
            <li> <a href='/profile/edit'> Share your skills with someone</a></li>
            <li> <a href='/login'>Sign up to Teach, Learn and Connect</a></li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer
