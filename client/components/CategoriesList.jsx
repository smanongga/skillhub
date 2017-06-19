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
      <div className='container'>
        <div className='category-title'>
          <h2>Browse for teachers or students in these categories:</h2>
          <div className='row'>
            {this.props.categoriesList.map((category, i) => {
              return (
                <Link to={`/skills/${category.id}`} key={i}>
                  <div className='col-md-4'>
                    <div className='category-thumbnail'>
                      {category.name}
                    </div>
                  </div>
                </Link>
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
