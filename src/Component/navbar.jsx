import React from 'react'
import './navbar.css'
import Home from '../Home'

const navbar = () => {
  return (
    <>
    
      <nav>
        <ul>
            <li>Home</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Profile</li>
           
        </ul>
        <div className='btn'>
          <button>Signin</button>
          <button>Login</button>
        </div>
      </nav>
  
    <div className='container'>
      <Home text = 'MacBook M1' image= './MA1.jpg' para='The MacBook M1, introduced by Apple in November 2020, revolutionizes personal computing with its custom-designed M1 chip, offering exceptional performance and efficiency. Encased in a sleek, lightweight aluminum body, it features a stunning 13.3-inch Retina display with P3 wide color gamut and True Tone technology. The M1 chip integrates an 8-core CPU, 8-core GPU, and 16-core Neural Engine, delivering up to 20 hours of battery life and remarkable processing power for demanding tasks. Running macOS Big Sur, the MacBook M1 supports iOS apps and Universal Apps, enhancing its versatility. With unified memory, fast SSD storage, and advanced security features, it caters to diverse user needs, from creative professionals to everyday users, setting new standards in laptop performance.'/>
    </div>
    </>
  )
}

export default navbar
