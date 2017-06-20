import React from 'react'
import Login from './Login'

class About extends React.Component {
  render () {
    return (
      <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h2>Sam Houlahan</h2>
            <p><a className='btn btn-primary btn-sm' href='https://github.com/Sam-Houlahan' role='button'>View on GitHub »</a></p>
          </div>
          <div className='col-md-4'>
            <h2>Julie Crutchley</h2>
            <p><a className='btn btn-primary btn-sm' href='https://github.com/juliecrutchley' role='button'>View on GitHub »</a></p>
          </div>
          <div className='col-md-4'>
            <h2>Sam Manongga</h2>
            <p><a className='btn btn-primary btn-sm' href='https://github.com/smanongga' role='button'>View on GitHub »</a></p>
          </div>
          <div className='col-md-4'>
            <h2>Rory Macdonald</h2>
            <p><a className='btn btn-primary btn-sm' href='https://github.com/rory-macdonald' role='button'>View on GitHub »</a></p>
          </div>
          <div className='col-md-4'>
            <h2>Robert Fisher</h2>
            <p><a className='btn btn-primary btn-sm' href='https://github.com/rob-dev-builder' role='button'>View on GitHub »</a></p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default About
