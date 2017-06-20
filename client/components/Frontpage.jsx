import React from 'react'
import Login from './Login'
import CategoriesList from './CategoriesList'

class Frontpage extends React.Component {
  render () {
    return (
      <div>
        <div className='frontpage'>
          <div className='jumbotron'>
            <div className='container'>
              <h2 className='slogan'><span className='first'>Teach</span>. Learn. <span className='second'>Connect</span>.<br />
                <a className='btn btn-success sign-up' href='#'>Sign up</a>
              </h2>
            </div>
          </div>
        </div>
        <div className='you-can-learn'>
          <div className='container front-about'><h2>About skillHub</h2>
            <div className='row about-text'>
              <p className='about'>skillHub provides a social space to connect people looking to learn new skills with those willing to offer their expertise</p>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div className='row'>
                  <i className='fa fa-address-card-o fa-5x'></i>
                  <p className='about'>Sign up and let us know what skills you would like to learn and teach</p>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='row'>
                  <i className='fa fa-users fa-5x'></i>
                  <p className='about'>Connect with others in your area with similar interests</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <CategoriesList />
        </div>
      </div>
    )
  }
}

export default Frontpage
