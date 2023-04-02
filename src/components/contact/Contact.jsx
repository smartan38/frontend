import React from 'react'
import {motion} from "framer-motion"
import { useState } from 'react';
import { server } from '../../redux/store';
import axios from 'axios';

const Contact = () => {
    const options = {
        initial :{y:"-100%" , opacity :0},
        whileInView :{y:0 , opacity :1},
        transition:{delay :0.2}
      };

      const [enteredName , setName]=useState('');
      const [enteredEmail , setEmail]=useState('');
      const [enteredMessage , setMessage]=useState('');
      const nameHandler =(event)=>
      {
              setName(event.target.value);
      }
      const emailHandler = (event) =>
      {
              setEmail(event.target.value);
      }
      const messageHandler = (event) =>
      {
              setMessage(event.target.value);
      }
      
      const submitHandler = (event)=>{
        event.preventDefault();
        const data = {
          name : enteredName,
          email : enteredEmail,
         message : enteredMessage,
        }
         axios.post(`${server}/contact`,data,{
          withCredentials : true,
         });
         setName('');
      
         setEmail('');
         setMessage('');
        alert("Thank For Contacting Us...");
      }

  return (
<section className='contact'>

 <motion.form {...options} onSubmit={submitHandler}>
    <h2>Contact Us</h2>
    
    <input type="text" placeholder='Name' 
     value={enteredName}
     onChange={nameHandler}
    />
    <input type= "email" placeholder='Email'
      value={enteredEmail}
      onChange={emailHandler}
    />
    <textarea placeholder='Message' cols="30" rows="10" 
      value={enteredMessage}
      onChange={messageHandler}
    />
    <button type="submit" >SEND US</button>
  
 </motion.form>

</section>
  )
}

export default Contact