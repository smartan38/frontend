import React from 'react'
 import {FcGoogle} from "react-icons/fc"
import { server } from '../../redux/store'

const Login = () => {
  const loginHandler=()=>{
    window.open(`${server}/googlelogin`)    //redirect to google login link
  }
  return (
   <section className='login'>
    <button onClick={loginHandler}>
        Login with Google id 
        <FcGoogle />
    </button>
   </section> 
  )
}

export default Login