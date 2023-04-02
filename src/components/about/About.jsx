import React from 'react'
import { Link } from 'react-router-dom'
import {RiFindReplaceLine} from "react-icons/ri"
import me from "../../assets/me.jpg"

const About = () => {
  return (
    <section className='about'>
        <main>
            <h1>About Us</h1>
            <article>
                <h4>Engineer Burger Wala</h4>
                <p>We Serve Best Quality Burger With Added Taste And Love On Earth</p>
                <p>Explore the Ranges Of Burgers, Click Below</p>
                <Link to="/">
                <RiFindReplaceLine/>
                </Link>
            </article>
            <div>
                <h2>Founder</h2>
                <article>
                    <div>
                        <img src={me} alt="" height="200" width="200"/>
                        <h3>Saurav Kumar</h3>
                    </div>
                    <p>I am Saurav Kumar Founder And Ceo Of Engineer Burger Wala</p>
                </article>

            </div>
        </main>

    </section>
  )
}

export default About