import React from 'react'
import './Home.css'

const Home = (props) => {
  return (
    <div className='card'>
      <img src={props.image} alt="Macbook" className='Macbook' />
      <h1><b>{props.text}</b></h1>
      <p>{props.para}</p>
    </div>
  )
}

export default Home
