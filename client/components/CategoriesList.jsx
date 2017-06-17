import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getAllCategories} from '../actions'

class CategoriesList extends React.Component {
  componentDidMount () {
    this.props.fetchCategories()
  }

  render () {
    return (
      <div className='category-container col-md-12'>
        <div className='category-title'>
          <h2>Browse for teachers or students in these categories:</h2>
          <div>
            {this.props.categoriesList.map((category, i) => {
              console.log(category)
              return (
                <Link to={`/profiles/${category.name}`}key={i}><div className='category-thumbnail col-md-3'>
                  {category.name}
                </div></Link>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
function mapDispatchToProps (dispatch) {
  return {
    fetchCategories: () => {
      dispatch(getAllCategories())
    }
  }
}

function mapStateToProps (state) {
  return {
    categoriesList: state.categories
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList)
