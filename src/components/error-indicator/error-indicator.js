import React from 'react'
import './error-indicatior.css'
import icon from './death-star.png'

const ErrorIndicator = () => {
  return (
      <div className='error-indicator'>
        <img src={icon} alt='error icon'/>
        <span className='error'>Error</span>
        <span>
          Sorry we couldn't find that page
        </span>
        <span>
          Ooh Shit!
        </span>
      </div>
  )
}

export default ErrorIndicator