import React, { useRef, useState } from 'react'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../utils/firebase'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const[Toggle,setToggle] = useState(true);
  const [Error, setError] = useState(null)
  const navigate = useNavigate();
  const handleClick = ()=>{
    setToggle(!Toggle);
  }


  const email = useRef();
  const name = useRef();
  const password = useRef();
  const handleCheckValidation = ()=>{
    const message = checkValidData(email.current.value,password.current.value);
    setError(message)
    if(message) return
    if(!Toggle){
     
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          if(user) setToggle(true)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setError("UserId already in use,Please registered using some other Id");
        });
    }
    else {signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if(user) 
        navigate('/browse')

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError('Invalid UserId or Password');
      });
  }
  }
  
  





  return (
    <div>
        <img className='absolute w-44 bg-gradient-to-b from-black z-10' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
        <img className='absolute w-screen h-screen' src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_small.jpg" alt="" />
        <form className='h-auto  md:w-3/12 w-7/12 bg-black m-36 mx-auto right-0 left-0 bg-opacity-75 rounded-xl absolute' onSubmit={(e)=>e.preventDefault()}>
            <h3 className='p-5 text-red-800 font-bold text-2xl md:text-xl cursor-pointer'>{Toggle?"Sign In":"Sign out"}</h3>
            
            {!Toggle && <input className='mx-6 my-3 p-2 bg-slate-500 rounded-lg' type="text" placeholder='Enter Name' ref={name} />}
            <input className='mx-6 my-3 p-2 bg-slate-500 rounded-lg' type="email" placeholder='Enter Email'ref={email} />
            <input className='mx-6 my-3 p-2 bg-slate-500 rounded-lg' type="password" placeholder='Password' ref={password} />
            <button type='submit' className='mx-6 my-3 p-2 bg-blue-700 rounded-lg' onClick={handleCheckValidation}>Submit</button>
            <p className='text-red-600 px-6'>{Error}</p>
            <p className='p-4 text-green-700' onClick={handleClick}>{Toggle?"Are you new,Let's Sign Up":"Already registered?Sign in Now."}</p>
        </form>
    
    </div>
  )
}

export default Login