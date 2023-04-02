import React from 'react'
import {AiFillInstagram , AiFillGithub,AiFillYoutube, AiFillTwitterCircle ,AiFillFacebook} from "react-icons/ai"

const Footer = () => {
  return (
  <footer>
    <div>
        <h2>Engineer Burger Wala </h2>
        <p>Experience the Lazeez Taste Of Indigenous And Exotic Burger</p>
        <br />
        <em>We Attend Genuine Feedback  </em>
        <strong>All right reserved @engineerburgerwala</strong>
    </div>
    <aside>
        <h4>Follow us</h4>
        <a href="#1"><AiFillYoutube/></a>
        <a href="#2"><AiFillInstagram/></a>
        <a href="#3"><AiFillTwitterCircle/></a>
        <a href="#4"><AiFillFacebook/></a>
        <a href="#4"><AiFillGithub/></a>
    </aside>
  </footer>
  )
}

export default Footer