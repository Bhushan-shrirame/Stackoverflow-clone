import React from 'react'
import './verifyuser.css'

const VerifyUser = () => {

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h2 className="Auth-form-title">User Verification</h2>
          <form>
            <input
              type="number"
              name='mobile'
              className="otp-input-area"
              placeholder="Enter Phone Number"
              // onChange={handleChange}
            />          
            <button id = "sign-in-button" type="submit" className="Otp-btn" placeholder='Otp-btn'>
             Send OTP
            </button>
          </form>

          <form> 
            <input
              type="number"
              className="otp-input-area"
              placeholder="Enter OTP"
              name="otp"
              // onChange={handleChange}
            />
            <button type="submit" className="Otp-btn" placeholder='verify-btn'>
              Verify
            </button>
          </form>
        </div>
      </form>
    </div>
  )
}

export default VerifyUser