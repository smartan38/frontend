import React from 'react'
import { Link } from 'react-router-dom'
const PaymentSucess = () => {
  return (
  <section className='paymentsucess'>
    <main>
        <h1>Order Confirm</h1>
        <p>Order Placed Sucessfully , You can check your order in order section</p>
        <Link to = "/myorders" >Check Status</Link>
    </main>
  </section>
  )
}

export default PaymentSucess