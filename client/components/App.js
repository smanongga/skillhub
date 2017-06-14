import React from 'react'
import Navbar from './Navbar'
import Quote from './Quote'

import EditProfile from './EditProfile'

const App = () => {
  return (
    <div>
      <h1>Quotes</h1>

      <Navbar />
      <div className='quote'>
        <Quote />

        <EditProfile />
      </div>
    </div>
  )
}

export default App
