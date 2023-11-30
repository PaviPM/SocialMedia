import React, { useEffect, useState } from 'react'
import "./FollowersCard.css"
import User from '../User/User'
import { useSelector } from 'react-redux'
import { getAllUser } from '../../Api/UserRequest'

const FollowersCard = () => {
  const [persons,setPersons] = useState([]);
  const {user} = useSelector((state)=>state.authReducer.authData);

  useEffect(()=>{
    const fetchpersons = async()=>{
      const {data} = await getAllUser();
      setPersons(data);
      console.log(data);
    };
    fetchpersons();
  },[])
  return (
    <div className='FollowersCard'>
      <h3>People you may know</h3>

      {persons.map((person,id)=>{
        if(person._id !== user._id){
          return(
            <User person = {person} key={id} />
          )
        }
      })}

    </div>
  )
}

export default FollowersCard