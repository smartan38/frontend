import React, { useEffect } from 'react'
import img1 from "../../assets/burgerr.jpg";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
// import { checkTargetForNewValues } from 'framer-motion';
const Cartsitem=({value ,title ,img1,increment,decrement})=>{
  return (
<div className='cartItem'> 
  <div>
    <h4>{title}</h4>
    <img src={img1} alt="item" />
  </div>
  <div>
    <button onClick={increment}>+</button>
    <input type="number" readOnly value={value} />
    <button onClick={decrement}>-</button>
  </div>

</div>
  )
}


const Cart = () => {
  const {
    cartItems :{
        cheeseBurger : {quantity : QTYcheeseBurger},
        vegCheeseBurger : {quantity : QTYvegCheeseBurger},
        burgerWithFries : {quantity : QTYburgerWithFries},
    },
  subTotal,
  tax,
  shippingCharges,
  total,
   } =useSelector(state=>state.carts)
  const {cartItems :orderItems} = useSelector(state=>state.carts)
   const dispatch = useDispatch()

  const increment = (item) =>{
    switch (item) {
      case 1:
        dispatch({type :"cheeseBurgerIncrement"})
        dispatch({type :"calculatePrice"})
        break;
      case 2:
        dispatch({type : "vegCheeseBurgerIncrement"})
        dispatch({type :"calculatePrice"})
        break;

      case 3:
        dispatch({type : "burgerWithFriesIncrement"})
        dispatch({type :"calculatePrice"})
        break;
      default:
        dispatch({type : "cheeseBurgerIncrement"})
        dispatch({type :"calculatePrice"})
        break;
    }
  }

  
  const decrement =(item)=>{
    switch (item) {
      case 1:
             if(QTYcheeseBurger===0) break;
        dispatch({type :"cheeseBurgerDecrement"})
        dispatch({type :"calculatePrice"})
        break;
      case 2:
        if(QTYvegCheeseBurger===0) break;
        dispatch({type : "vegCheeseBurgerDecrement"})
        dispatch({type :"calculatePrice"})
        break;
      case 3:
        if(QTYburgerWithFries===0) break;
        dispatch({type : "burgerWithFriesDecrement"})
        dispatch({type :"calculatePrice"})
        break;
      default:
        if(QTYcheeseBurger===0) break;
        dispatch({type : "cheeseBurgerDecrement"})
        dispatch({type :"calculatePrice"})
        break;
    }
}

useEffect(()=>{
  localStorage.setItem("cartItems" , JSON.stringify(orderItems));
  localStorage.setItem("cartPrices" , JSON.stringify({
    subTotal,
    tax,
    shippingCharges,
    total,
  }));
},[orderItems, subTotal,tax,shippingCharges,total])

 return (
  <section className='cart'>
    <main>
    <Cartsitem value={QTYcheeseBurger} title= {"Cheeze Burger"}img1={img1} increment ={()=>increment(1)} decrement ={()=>decrement(1)}/>
    <Cartsitem value={QTYvegCheeseBurger} title= {"VegCheese Burger"}img1={img1} increment ={()=>increment(2)} decrement ={()=>decrement(2)}/>
    <Cartsitem value={QTYburgerWithFries} title= {"Fries and Burger"}img1={img1} increment ={()=>increment(3)} decrement ={()=>decrement(3)}/>
    <article>
      <div>
        <h4>Sub Total</h4>
        <p>₹{subTotal}</p>
      </div>
      <div>
        <h4>Tax</h4>
        <p>₹{tax}</p>
      </div>
      <div>
        <h4>Shipping</h4>
        <p>₹{shippingCharges}</p>
      </div>
      <div>
        <h4>Total</h4>
        <p>₹{total}</p>
      </div>
      <Link to="/shipping">Checkout</Link>
    </article>
    </main>
  </section>

  
  )
}

export default Cart