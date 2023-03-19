import React from 'react'
import '../cssPages/Login.css'
const LoginSignUp = () => {
    return (
      <>
      <div class="container">
      <div class="container1">
        <input id="register_toggle" type="checkbox" />
      <div class="slider">
      <form class="form">
        <span class="title">Login</span>
        <div class="form_control">
          <input required="" class="input" type="text" placeholder='Username'/>
          
        </div>
        <div class="form_control">
          <input required="" type="password" class="input"  placeholder='password'/>
          
        </div>
        <button>Login</button>
  
        <span class="bottom_text">Don't have an account? <label class="swtich" for="register_toggle">Sign Up</label> </span>
      </form>
      <form class="form">
        <span class="title">Sign Up</span>
        <div class="form_control">
          <input required="" class="input" type="text" placeholder='Fullname' />
        </div>
        <div class="form_control">
          <input required="" class="input" type="text" placeholder='Gamertag' />
        </div>
        <div class="form_control">
          <input required="" class="input" type="date" />
        </div>
        <div class="form_control">
          <input required="" class="input" type="email" placeholder='Email' />
        </div>
        <div class="form_control">
          <input required="" class="input" type="password" placeholder='Password' />
        </div>
        <button>Sign Up</button>
  
        <span class="bottom_text">Already have an account? <label class="swtich" for="register_toggle">Sign In</label> </span>
      </form>
  
      
      </div>
  </div>
      </div>
  </>
      
    )
  }
  export default LoginSignUp;