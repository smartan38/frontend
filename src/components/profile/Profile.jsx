import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions/user.js'
import Loader from '../layout/Loader'
const Profile = () => {
       const dispatch = useDispatch();
       const {loading,user} = useSelector(state=>state.auth)
  const logoutHandler = ()=>{
         dispatch(logout())
  }
  return (
    <section className='profile'>
       {
        loading===false ?
        <main>
        <img src={user.photo} alt="User" />
        <h5>{user.name}</h5>
       {
        user.role==="admin" && (
          <div>
          <Link to ="/admin/dashboard">Dashboard</Link>
      </div>
        )
       }
        <div>
            <Link to ="/myorders">Orders</Link>
        </div>
        <button onClick={logoutHandler}>Logout </button>
        </main> : <Loader/>
       }
    </section>
  )
}

export default Profile