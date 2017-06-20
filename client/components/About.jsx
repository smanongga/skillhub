import React from 'react'

class About extends React.Component {
  render () {
    return (
      <div>
      <p>test<i class='fa fa-github' aria-hidden='false'></i></p>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <p>
            Created in June of 2017 and based in Auckland, New Zealand, SkillHub is a trusted community for people to share, discover, and book training sessions — online or from a mobile phone or tablet.
            <br />
            <br />
            SkillHub was created in June 2017 by the following <a href='https://www.devacademy.co.nz/'>EDA</a> students:
         </p>
          </div>
          <div className='col-md-4'>
            <h2>Sam Houlahan</h2>
            <img className='dev-profile' src='https://avatars2.githubusercontent.com/u/24367156?v=3&s=400' alt='Picture of Sam H' />
            <p><a className='btn btn-primary btn-sm' href='https://github.com/Sam-Houlahan' role='button'>GitHub</a></p>
            <p><a className='btn btn-primary btn-sm' href='https://github.com/Sam-Houlahan' role='button'>LinkedIn</a></p>
          </div>
          <div className='col-md-4'>
            <h2>Julie Crutchley</h2>
            <img className='dev-profile' src='https://avatars3.githubusercontent.com/u/26125769?v=3&s=400' alt='Picture of Julie' />
            <p><a className='btn btn-primary btn-sm' href='https://github.com/juliecrutchley' role='button'>GitHub</a></p>
            <p><a className='btn btn-primary btn-sm' href='https://github.com/Sam-Houlahan' role='button'>LinkedIn</a></p>
          </div>
          <div className='col-md-4'>
            <h2>Sam Manongga</h2>
            <img className='dev-profile' src='https://avatars3.githubusercontent.com/u/9649569?v=3&s=400' alt='Picture of Sam M' />
            <p><a className='btn btn-primary btn-sm' href='https://github.com/smanongga' role='button'>GitHub</a></p>
            <p><a className='btn btn-primary btn-sm' href='https://github.com/Sam-Houlahan' role='button'>LinkedIn</a></p>
          </div>
          <div className='col-md-4'>
            <h2>Rory Macdonald</h2>
            <img className='dev-profile' src='https://avatars0.githubusercontent.com/u/24968416?v=3&s=400' alt='Picture of Rory' />
            <p><a className='btn btn-primary btn-sm' href='https://github.com/rory-macdonald' role='button'>GitHub</a></p>
            <p><a className='btn btn-primary btn-sm' href='https://github.com/Sam-Houlahan' role='button'>LinkedIn</a></p>
          </div>
          <div className='col-md-4'>
            <h2>Robert Fisher</h2>
            <img className='dev-profile' src='https://avatars1.githubusercontent.com/u/5499398?v=3&s=400' alt='Picture of Rob' />
            <p><a className='btn btn-primary btn-sm' href='https://github.com/rob-dev-builder' role='button'>GitHub</a></p>
            <p><a className='btn btn-primary btn-sm' href='https://github.com/Sam-Houlahan' role='button'>LinkedIn</a></p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default About
