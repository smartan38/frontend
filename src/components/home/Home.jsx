import React from 'react'
import {motion} from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";
import "../../styles/founder.scss"
import "../../styles/menu.scss"
const Home = () => {
  return (
    <>
  <section className='home'>
    <div>
      <motion.h1 
      initial ={{x:"-100%",opacity : 0}}
      whileInView={{x:0,opacity : 1}}
      >
        Engineer Burger Wala</motion.h1>
      <motion.p
       initial ={{x:"-100%",opacity : 0}}
       whileInView={{x:0,opacity : 1}}
       transition={{dealy : 0.2}}
       >Give Yourelf A Delicious Experience Of Burger</motion.p>
    </div>
    <motion.a href="#menu"
       initial ={{y:"-100%",opacity : 0}}
       whileInView={{y:0,opacity : 1}}
       transition={{dealy : 0.2}}
    >Explore Menu</motion.a>

  </section>
  <Founder />
  <Menu />
  </>
  )
}

export default Home