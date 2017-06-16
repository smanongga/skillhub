import React, {Component} from 'react'
import {connect} from 'react-redux'

class Profile extends Component {
  render () {
    return (
      <div>
        <h1>Working!</h1>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {

  }
}

function mapDispatchToProps (state) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

// function Profile (props) {
//   const image = props.photoUrl
//   return (
//     <div className='profile-page'>
//       <h2>This is the profile page</h2>
//       <div className='profile-pic col-md-3'>
//         <img src="http://via.placeholder.com/100x100" />
//       </div>
//       <div className='profile-details col-md-9'>
//         <h2>John Smith</h2>
//         <h4>Auckland, New Zealand</h4>
//          <p>Hi, I'm John! I live in Auckland and I want to learn how to play the triangle.</p>
//         <p>In return, I'd like to teach people how to play the guitar, I've been playing guitar for over 20 years</p>
//       </div>
//       <div className='col-md-6'>
//         <h3>Skills John would like to teach</h3>
//         <ul>
//           <li>Guitar</li>
//         </ul>
//       </div>
//       <div className='col-md-6'>
//         <h3>Skills John would like to learn</h3>
//         <ul>
//           <li>Triangle</li>
//           <li>Javascript</li>
//         </ul>
//       </div>
//       <div className='feedback'>
//         <h3>Feedback on John</h3>
//         <p>Feedback from other users will go here</p>
//       </div>
//     </div>
//   )
// }
