import React from 'react'
import './userCard.css'

export default function UserCard({user}) {

  return (
    <div className='card'>
        <img src={user.avatar} alt='{user.first.name}'/>
        <div className='card2'>
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p>{user.email}</p>
        </div>
    </div>
  )
}
