import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{
      backgroundColor: '#9a9a9a', color: 'black', display: 'flex',
      justifyContent: 'end', alignItems: 'center', paddingRight: '25px', height: '50px'
    }}>
      <Link style={{ color: 'black' }} to="/page/1"><h4>Таблица</h4></Link>
    </div>
  )
}

export default Navbar
