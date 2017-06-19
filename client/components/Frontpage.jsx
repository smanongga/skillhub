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
          <div className='container'> <h2>About skillHub</h2>
            <div className='row'>
              <div className='col-md-6'><div className='row-item'>
                  <p className='chunk'>skillHub provides a social space to connect people looking to learn new skills with those willing to offer their expertise</p>
                  <p className='chunk'>Sign up and search for like minded people in your area to teach or to learn from </p>
              </div>
              </div>
              <div className='col-md-6'><div className='row'>
                <div className='row-item row-item--shrink text--red'>
                <span className='svg svg--plus '></span>
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
