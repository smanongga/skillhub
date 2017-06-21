import React from 'react'
import SignUp from './SignUp'
import CategoriesList from './CategoriesList'
import {Route} from 'react-router'

class Frontpage extends React.Component {
  render () {
    return (
      <div>
        <div className='frontpage'>
          <div className='jumbotron'>
            <div className='container'>
              <h2 className='slogan'><span className='first'>Teach</span>. Learn. <span className='second'>Connect</span>.<br />
                <Route path='/' component={SignUp} />
              </h2>
            </div>
          </div>
        </div>
        <div className='you-can-learn'>
          <div className='col-md-12'>
            <div className='about'>
              <h2 className="about-title">About skillHub</h2>
              <p className="about-title">skillHub provides a social space to connect people looking to learn new skills with those willing to offer their expertise
              </p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='about'>
              <h3>Sign up</h3>
              <i className='fa fa-address-card-o fa-5x'></i>
              <p>Sign up - let us know a little about yourself and what skills you would like to learn and teach
              </p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='about'>
              <h3>Connect</h3>
              <i className='fa fa-handshake-o fa-5x fa-4x'></i>
              <p>Connect with others in your area based on skills you would like to teach or be taught
              </p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='about'>
              <h3>Teach</h3>
              <i className='fa fa-users fa-5x fa-4x'></i>
              <p>Pass on your knowledge and skills to others who are interested in those subjects
              </p>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='about'>
              <h3>Learn</h3>
              <i className='fa fa-university fa-5x fa-4x'></i>
              <p>Learn from like minded, passionate people with the knowledge and skills you are seeking
              </p>
            </div>
          </div>
          <div className='container front-about row'>
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
