import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCategoryUsersLearn, getCategoryUsersOffer} from '../actions/index'
import {Link} from 'react-router-dom'

class CategoryPage extends Component {
  componentDidMount () {
    this.props.getUsersLearn()
    this.props.getUsersOffer()
  }

  render () {
    console.log(this.props.UsersLearn)
    return (
      <div className='container'>
      <div><h2>To Learn</h2>
        <div>{this.props.UsersLearn.map((user, i) => {
           return (
             <Link to={`/profile/${user.id}`}key={i}><div className='category-thumbnail col-md-1'>
             <p>{user.firstName}</p>
             <br />
             <p>{user.categories[0].skills}</p>
           </div></Link>
           )
        })}</div>
      </div>
      <div className='clear-box'><h2>To Offer</h2></div>
      <div>{this.props.UsersOffer.map((user, i) => {
         return (
           <Link to={`/profile/${user.id}`}key={i}><div className='category-thumbnail col-md-1'>
           <p>{user.firstName}</p>
           <br />
           <p>{user.categories[0].skills}</p>
         </div></Link>
         )
      })}</div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
   UsersLearn: state.categoryUsersLearn,
   UsersOffer: state.categoryUsersOffer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getUsersLearn: (cb) => {
      dispatch(getCategoryUsersLearn(cb))
    },
    getUsersOffer: (cb) => {
      dispatch(getCategoryUsersOffer(cb))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)
