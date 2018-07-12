import React from 'react'
import {Link} from 'react-router-dom'

import './Modals.css'

const SelectModal = () => {
  return (
    <div className='modal'>
      <div className='modalContent'>
        <Link to='/cooking/articles'><p>cooking</p></Link>
        <Link to='/coding/articles'><p>coding</p></Link>
        <Link to='/football/articles'><p>football</p></Link>
      </div>
    </div>
    //when pressed a link from above needs to rerender the articles in topic
  )
}

export default SelectModal