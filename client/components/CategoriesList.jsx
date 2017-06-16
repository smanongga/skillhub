import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {fetchCategories} from '../actions'

class Categories extends React.Component {
  componentDidMount () {
    this.props.fetchCategories()
  }

  render () {
    return (
      <div className='category-container col-md-12'>
        <div className='category-title'>
          <h2>Browse for teachers or students in these categories:</h2>
          <div>
            {this.categoriesList.map((category, key) => {
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
}
function mapDispatchToProps (dispatch) {
  return {
    fetchCategories: () => {
      dispatch(fetchCategories())
    }
  }
}

function mapStateToProps (state) {
  return {
    categoriesList: state.categories
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
