import React, { useEffect, useState } from 'react'
import "./chatOnline.css"
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:process.env.ACT_APP_API_URL
})

export default function ChatOnline({onlineUsers, currentId, setCurrentChat}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [friends, setFriends] = useState([])
    const [onlineFriends, setOnlineFriends] = useState([])

    useEffect(() => {
        const getFriends = async () => {
            const res = await axiosInstance.get("/users/friends/" + currentId);
            setFriends(res.data)
        };

        getFriends()
    }, [currentId]);

    useEffect(() => {
        setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
    }, [friends, onlineUsers])

    const handleClick = async (user) => {
        try {
            const res = await axiosInstance.get(`/conversations/find/${currentId}/${user._id}`)
            setCurrentChat(res.data)
        } catch (err) {
            console.log(err)
        }
    }

  return (
      <div className='chatOnline'>
          {onlineFriends.map((o) => (
              <div className="chatOnlineFriend" onClick={()=>handleClick(o)}>
                    <div className="chatOnlineImgContainer">
                            <img
                                className='chatOnlineImg'
                                src={o?.profilePicture ? PF + "person/" + o?.profilePicture : PF + "person/noAvatar.jpg"
                                } alt="" />
                        <div className="chatOnlineBadge"></div>
                    </div>
                   <span className="chatOnlineName">{ o.username}</span>
              </div>
              
          ))}
      </div>
      
  )
}
