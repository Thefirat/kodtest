import React from 'react'
import {Link} from 'react-router-dom';
import '../Style/style.css'

function Nav() {
  return (
    <div className='nav-div'>
        <Link className='nav-link' to="/">1</Link>  <Link className='nav-link' to="/employees">2</Link>

    </div>
  )
}

export default Nav