import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Categories = (props) => {
  const categoriesList = ['Music', 'Design', 'Technology', 'Crafts', 'Business', 'Photography', 'Film', 'Writing', 'Culinary']
  return (
    <div className='category-container col-md-12'>
      <div className='category-title'>
        <h2>Browse for teachers or students in these categories:</h2>
        <div>
          {categoriesList.map((category, key) => {
            return (
              <Link to={`/profiles/${category}`}key={key}><div className='category-thumbnail col-md-3'>
                {category}
              </div></Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Categories 
