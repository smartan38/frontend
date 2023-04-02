import React from 'react'
import MenuCard from './MenuCard'
import burger1add from "../../assets/burgerr.jpg"
import burger2add from "../../assets/burgerr.jpg"
import burger3add from "../../assets/burgerr.jpg"
// import burger4add from "../../assets/burgerr.jpg"
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
 
const Menu = () => {
  const dispatch= useDispatch()
  const addToCartHandler =(itemNum)=>{
    switch (itemNum) {
      case 1:
        dispatch({type : "cheeseBurgerIncrement"})
        dispatch({type : "calculatePrice"})
        toast.success("Added To Cart")
        break;
        case 2:
        dispatch({type : "vegCheeseBurgerIncrement"})
        dispatch({type : "calculatePrice"})
        toast.success("Added To Cart")
        break;
        case 3:
        dispatch({type : "burgerWithFriesIncrement"})
        dispatch({type : "calculatePrice"})
        toast.success("Added To Cart")
        break;
    
      default:
        dispatch({type : "cheeseBurgerIncrement"})
        dispatch({type : "calculatePrice"})
      toast.success("Added To Cart")
        break;
    }

  }
  return (
    <section className='menu'>
      <h1>Menu</h1>
      <div>
        <MenuCard 
        itemNum={1} 
        burgerSrc={burger1add}
         price={200} 
         title ={"Cheese Burger"}
         delay={.2}
         handler ={addToCartHandler}
         />
         <MenuCard 
        itemNum={2} 
        burgerSrc={burger2add}
         price={400} 
         title ={"Veg Cheese Burger"}
         delay={.4}
         handler ={addToCartHandler}
         />
         <MenuCard 
        itemNum={3} 
        burgerSrc={burger3add}
         price={300} 
         title ={"Burger With Fries"}
         delay={.6}
         handler ={addToCartHandler}
         />
         
      </div>
    </section>
  )
}

export default Menu