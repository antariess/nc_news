import React from 'react'
import {Link} from 'react-router-dom'

const SelectModal = () => {
  return (
    <div className='selectModal'>
      <div className='selectModalComponent'>
        <Link to='/cooking/articles'><p>cooking</p></Link>
        <Link to='/coding/articles'><p>coding</p></Link>
        <Link to='/football/articles'><p>football</p></Link>
      </div>
    </div>
    //when pressed a link from above needs to rerender the articles in topic
  )
}

export default SelectModal