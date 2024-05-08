import React, { useEffect, useRef, useState } from 'react'
import './loginRegister.css'
import { Link } from 'react-router-dom'
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const LoginRegister = () => {

  const [slideTurn,setSlideTurn] = useState(true)
  const slider = useRef('')
  const [show , setShow]  = useState(false)

// =========== animation function 
  const handlSlide = ()=>{
      if(slideTurn){
        slider.current.classList.add('slideAnimate')
        slider.current.classList.remove('form_slider')
        setSlideTurn(!slideTurn)






      }else{
        slider.current.classList.remove('slideAnimate')
        slider.current.classList.add('form_slider')
        setSlideTurn(!slideTurn)

        
      }
  }

//   ============== show funtion 
  const handelShow = ()=>{
        setShow(!show)
  }
  


  return (
        <>
        <section className="main">
        <div className="leaf"><img src="images/loginRegesterBg.png" alt="images" /></div>
          <div className="main_from">
            <div ref={slider} className="form_slider">

            <div className="logo_col"><img src="images/loginLogo.png" alt="loginLogo" /></div>
                {
                    slideTurn?
                    <div className="form_text">
                            <h2>Welcome back!</h2>
                            <h5  >Sign in to beigin</h5>
                            <p >We see you! We're excited to welcome you back to your account.  Everything you need is right here, waiting for you.  Just sign in below to get started and jump back into Chatting App.  It's quick and easy, so let's get you logged in!</p>
                    </div>
                :
                <div className="form_text">
                    <h2>Welcome!</h2>
                    <h5  >Sign Up to start</h5>
                    <p >Joining us is safe and easy!  Create your free account in just a few steps to unlock a world of . We're here to make your experience enjoyable, so jump right in!</p>
                 </div>
                }
            <div className="change_button_part">
                {
                    slideTurn?
                    <button onClick={handlSlide} className='change_button'>Register</button>
                        :
                    <button onClick={handlSlide} className='change_button'>Login</button>
                    
                }
            </div>
            </div>
            {
                slideTurn?
                <div id='login' className='mr-auto'>
                <div className="main_form">
                    <div className="form_head">
                        <h3>Log in to your account</h3>
                        <p>Welcome back! Please enter your details.</p>
                    </div>
                    <form className='form'>
                        <p>Email <span className='text-red-500 text-xl'>*</span></p>
                        <input type="text" placeholder='Enter your email' />
                        <p className='mt-5'>Password <span className='text-red-500 text-xl'>*</span></p>
                        <div className='relative'>
                            {
                                show?
                                <IoEyeOutline onClick={handelShow} className='absolute top-1/2  translate-y-[-50%] right-2' />
                                : 
                                <IoEyeOffOutline onClick={handelShow} className='absolute top-1/2  translate-y-[-50%] right-2' />
                            }
                            <input  type={show? 'text' : 'password'} placeholder='Enter your Password' />
                        </div>
                        <div className="options">
                            <div className="rember"><input type="checkbox" id='remember'/> <label htmlFor='remember'>Remember for 30 days</label></div>
                            <div className="forgotPass"><Link to="#" >Forgot password ?</Link></div>
                        </div>
                        <Link className='submit_button'> Sign in</Link>
                    </form>
                </div>
            </div>
            :
            <div id='register'>
            <div className="main_form">
                <div className="form_head">
                    <h3>Sign Up to your account</h3>
                    <p>Welcome back! Please enter your details.</p>
                </div>
                <form className='form'>
                    <p>User Name <span className='text-red-500 text-xl'>*</span></p>
                    <input type="text" placeholder='Enter your User Name' />
                    <p className='mt-5'>Email <span className='text-red-500 text-xl '>*</span></p>
                    <input  type="text" placeholder='Enter your Email' />
                    <p className='mt-5'>Password <span className='text-red-500 text-xl '>*</span></p>
                    <div className='relative'>
                            {
                                show?
                                <IoEyeOutline onClick={handelShow} className='absolute top-1/2  translate-y-[-50%] right-2' />
                                : 
                                <IoEyeOffOutline onClick={handelShow} className='absolute top-1/2  translate-y-[-50%] right-2' />
                            }
                            <input  type={show? 'text' : 'password'} placeholder='Enter your Password' />
                        </div>
                    <Link  className='submit_button'> Sign Up</Link>
                </form>
            </div>
        </div>
            }
          </div>
          
        </section>


        {/* ================ loign part start ================ */}







    </>
  )
}

export default LoginRegister