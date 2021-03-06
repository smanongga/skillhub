import React from 'react'

class About extends React.Component {
  render() {
    return (
      <div>
        <div className='container page'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='title'>The skillHub Team</h1>
              <p>
                Created in Auckland, New Zealand, SkillHub is a community for people to share, discover and develop skills together. SkillHub was built by the following <a href='https://www.devacademy.co.nz/'> EDA </a> students in June 2017:
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='dev-profile'>
                <h2>Sam Houlahan</h2>
                <img className='dev-profile-image' src='https://avatars2.githubusercontent.com/u/24367156?v=3&s=400' alt='Picture of Sam H' />
                <div className='social-media-links'>
                  <a href='https://github.com/Sam-Houlahan' className='fa fa-github-square fa-2x favi-icon'></a>
                  <a href='#' className='fa fa-linkedin-square fa-2x favi-icon'></a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='dev-profile'>
                <h2>Julie Crutchley</h2>
                <img className='dev-profile-image' src='https://avatars3.githubusercontent.com/u/26125769?v=3&s=400' alt='Picture of Julie' />
                <div className='social-media-links'>
                  <a href='https://github.com/juliecrutchley' className='fa fa-github-square fa-2x'></a>
                  <a href='#' className='fa fa-linkedin-square fa-2x'></a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='dev-profile'>
                <h2>Sam Manongga</h2>
                <img className='dev-profile-image' src='https://avatars3.githubusercontent.com/u/9649569?v=3&s=400' alt='Picture of Sam M' />
                <div className='social-media-links'>
                  <a href='https://github.com/smanongga' className='fa fa-github-square fa-2x'></a>
                  <a href='https://www.linkedin.com/in/smanongga/' className='fa fa-linkedin-square fa-2x'></a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='dev-profile'>
                <h2>Rory Macdonald</h2>
                <img className='dev-profile-image' src='https://avatars0.githubusercontent.com/u/24968416?v=3&s=400' alt='Picture of Rory' />
                <div className='social-media-links'>
                  <a href='https://github.com/rory-macdonald' className='fa fa-github-square fa-2x'></a>
                  <a href='#' className='fa fa-linkedin-square fa-2x'></a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='dev-profile'>
                <h2>Robert Fisher</h2>
                <img className='dev-profile-image' src='https://avatars1.githubusercontent.com/u/5499398?v=3&s=400' alt='Picture of Rob' />
                <div className='social-media-links'>
                  <a href='https://github.com/rob-dev-builder' className='fa fa-github-square fa-2x'></a>
                  <a href='https://www.linkedin.com/in/robert-fisher-b1b68314/' className='fa fa-linkedin-square fa-2x'></a>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
