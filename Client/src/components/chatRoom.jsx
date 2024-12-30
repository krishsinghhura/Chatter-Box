import React from 'react'

const ChatRoom = () => {
  return (
    <>
    <div className="bg-white w-full border-solid shadow-lg flex flex-col  ">
    <div className="bg-green-700 text-white p-4 ">
      <h2 className="text-xl font-bold">Chat Room</h2>
    </div>

    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      <div className="flex justify-start">
        <div className="bg-gray-300 p-3 rounded-lg max-w-xs">
          <p className="text-sm">Hello, how are you?</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-green-700 text-white p-3 rounded-lg max-w-xs">
          <p className="text-sm">I'm good, thanks! How about you?</p>
        </div>
      </div>
      
    </div>

    
    <div className="bg-gray-100 p-4 rounded-b-lg">
      <form className="flex items-center">
        <input type="text" placeholder="Type a message..." className="bg-gray-300 w-full p-2 border rounded-lg focus:outline-none "/>
        <input type="file" id="file" class="hidden"/>
    
    <label for="file" 
           class="flex items-center justify-center bg-green-700 text-white p-2 rounded-lg ml-2 cursor-pointer hover:bg-blue-600">
            <i class="fa-regular fa-image"></i>
    </label>
        <button type="submit" className="bg-green-700 text-white p-2 rounded-lg ml-2"><i className="fa-solid fa-paper-plane"></i></button>
      </form>
    </div>
  </div>
    </>
  )
}

export default ChatRoom