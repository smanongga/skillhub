import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'

// import {updateProfile} from '../actions'

class EditProfile extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            profilePic: '',
            location: '',
            bio: '',
            skillsOffered: [],
            skillsWanted: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick () {
    }

    render () {
    return (
        <div className='edit-proflile'>
            <div className='edit-profile-form'>
                <h2>Edit Profile</h2>
                <p>User Name<input name='username' onChange={this.handleChange} placeholder={this.state.userName} /></p>
                <p>First Name<input name='firstname' onChange={this.handleChange} placeholder={this.state.firstName} /></p>
                <p>Last Name<input name='lastname' onChange={this.handleChange} placeholder={this.state.lastName} /></p>
                <p>Email<input name='email' onChange={this.handleChange} placeholder={this.state.email} /></p>
                <p>Password<input name='password' onChange={this.handleChange} placeholder={this.state.password} /></p>
                <p>Profile Pic<input name='profilepic' onChange={this.handleChange} placeholder={this.state.profilePic} /></p>
                <p>Location<input name='location' onChange={this.handleChange} placeholder={this.state.location} /></p>
                <p>Bio<input name='bio' onChange={this.handleChange} placeholder={this.state.Bio} /></p>
                <p>Skills Offered<input name='skillsoffered' onChange={this.handleChange} placeholder={this.state.skillsOffered} /></p>
                <p>Skills Wanted<input name='skillswanted' onChange={this.handleChange} placeholder={this.state.skillsWanted} /></p>
                <p><button onClick={this.updateProfile}>Save</button></p>
           </div>
        </div>
        )
    }
}


function mapDispatchToProps (dispatch) {
    return {
    }
}

function mapStateToProps (state) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)