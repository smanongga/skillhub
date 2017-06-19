import React from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
import CategoriesList from './CategoriesList'

class Frontpage extends React.Component {
  render () {
    return (
      <div>
        <div className='frontpage'>
          <nav className='navbar navbar-default not-loggedin'>
            <div className='container'>
              <div className='navbar-header'>
                <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
                  <span className='sr-only'>Toggle navigation</span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                </button>
                <Link to='/'> <img src='/skillHub-logo-front.png' /></Link>
              </div>
              <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav navbar-right'>
                  <li><Login /></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className='jumbotron'>
            <div className='container'>
              <h2 className='slogan'><span className='first'>Teach</span>. Learn. <span className='second'>Connect</span>.
              <a className='btn btn-success sign-up' href='#'>Sign up</a>
              </h2>
            </div>
          </div>
        </div>
        <div className='you-can-learn'>
          <div className='container'> <h2>How skillHub works</h2>
            <div className='row'>
              <div className='col-md-6'><div className='row-item'>
                <a href='https://secure.meetup.com/register/' className='j-modal--register'>
                  <h3 className='text--display3 text--heavy'>Find a Meetup</h3>
                  <p className='chunk'>Discover local Meetups for all the things you love.</p>
                  <p className='text--red text--bold'>Sign up</p>
                </a>
              </div>
              </div>
              <div className='col-md-6'><div class='row'>
                <div className='row-item row-item--shrink text--red'>
                <span className='svg svg--plus '></span>
                </div>
                <div className='row-item'>
                  <a href='https://secure.meetup.com/create/'>
                    <h3 className='text--display3 text--heavy'>Create a Meetup</h3>
                    <p className='chunk'>Create your own Meetup, and draw from a community of millions.</p>
                    <p className='text--red text--bold'>Create a Meetup</p>
                  </a>
                </div>
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
