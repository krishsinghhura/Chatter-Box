import React from 'react'
import SideBar from '../components/SideBar'
import ChatRoom from '../components/chatRoom'

const Home = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <ChatRoom/>
    </div>
  )
}

export default Home