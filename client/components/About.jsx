import React from 'react'
// change class to className
class About extends React.Component {
  render () {
    return (
      <div className='about container'>
        <p>skillHub was created by the following students at <a href='https://www.devacademy.co.nz/'>Enspiral Dev Academy</a></p>
        <ul>
          <li><a href='https://github.com/rory-macdonald'>Rory Macdonald</a></li>
          <li><a href='https://github.com/smanongga'>Sam Manongga</a></li>
          <li><a href='https://github.com/juliecrutchley'>Julie Crutchley</a></li>
          <li><a href='https://github.com/rob-dev-builder'>Robert Fisher</a></li>
          <li><a href='https://github.com/Sam-Houlahan'>Sam Houlahan</a></li>
        </ul>
        <div class='row'>
          <div class='col-md-4'>
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a class='btn btn-default' href='#' role='button'>View details »</a></p>
          </div>
          <div class='col-md-4'>
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a class='btn btn-default' href='#' role='button'>View details »</a></p>
          </div>
          <div class='col-md-4'>
            <h2>Heading</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a class='btn btn-default' href='#' role='button'>View details »</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
