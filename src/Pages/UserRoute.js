import React, { useEffect, useState } from 'react'
import UserContext from './Context/UserContext'
import { Outlet } from 'react-router-dom'
import Firebase from '../Firebase'

const UserRoute = () => {
const[state,setstate]=useState([])
useEffect(()=>{
Firebase.child("Blogs").on("value",function(snap){
    if(snap.val()){
        let array=[]
        Object.keys(snap.val()).map((user)=>{
            Object.keys(snap.val()[user]).map((key)=>{
                const object=snap.val()[user][key]
                object.User=user
                array.push(object);
            })  
        })
        setstate(array);
    }
    else return setstate([])
})
},[])
  return (
  <UserContext.Provider value={{"fetchalldata":state,"insertinalldata":setstate}}>
    <Outlet/>
  </UserContext.Provider>
  )
}

export default UserRoute
