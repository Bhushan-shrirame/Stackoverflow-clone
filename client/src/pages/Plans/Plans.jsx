import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import './Plans.css'
const plans = () => {
  return (
    <div className='home-container-1'>
       <LeftSidebar />
       <div className="home-container-2">
        <div>
          <h1 style={{fontWeight: "400", color:'black',fontSize:'40px'}}>Plans</h1>
       </div>
       <div id = "leftbox">
                <h2 style={{ fontSize:'40px'}}>Free</h2>
                <div>
                  <p style={{ fontSize:'30px' }}>0₹</p>
                </div>
                <div>
                  <p>Can post only 1 question a day</p>
                </div>
                <div className='bottom'>
                  <a href="/">
                  <button className='buynowbtn'>Start free trial</button>
                  </a>
                </div>
            </div>
             
            <div id = "middlebox">
              <h2 style={{ fontSize:'40px'}}>Silver</h2>
                <div>
                  <p style={{ fontSize:'30px'}}>₹100/month</p>
                </div>
                <div>
                  <p>Can post 5 questions a day</p>
                </div>
                <div className='bottom'>
                  <a href="https://buy.stripe.com/8wM14VaZqb4CdBC3cc">
                  <button className='buynowbtn'>Get Started</button>
                  </a>
                </div>
            </div>
             
            <div id = "rightbox">
            <h2 style={{ fontSize:'40px'}}>GOLD</h2>
                <div style={{ fontSize:'40px'}}>
                  <p style={{ fontSize:'30px'  }}>₹1000/month</p>
                </div>
                <div>
                  <p>Can post unlimited  questions</p>
                </div>
                <div className='bottom'>
                <a href="https://buy.stripe.com/3cs14Vd7yc8G1SU145">
                  <button className='buynowbtn'>Get Started</button>
                  </a>
                </div>
            </div>

       </div>
    </div>
  )
}

export default plans