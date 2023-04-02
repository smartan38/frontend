import React from 'react'
import {motion} from "framer-motion";
import me from "../../assets/burger2.jpg";



const founder = () => {
  const options = {
    initial :{x:"-100%" , opacity :0},
    whileInView :{x:0 , opacity :1}
  };

  return (
  <section className='founder'>
    <motion.div {...options}>
    <img src= {me} alt="founder" height={200} width = {200} />
  <h3>FOUNDER : SAURAV KUMAR</h3>
  <p>Hey There I am Founder And Ceo Saurav Kumar</p>
    </motion.div>
    
  </section>
  )
}

export default founder