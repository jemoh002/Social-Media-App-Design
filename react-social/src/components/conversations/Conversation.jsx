import React, { useEffect, useState } from 'react'
import "./conversation.css"
import axios from 'axios'
import { axiosInstance } from '../../utils/axiosInstance'


export default function Conversation({ conversation, currentUser }) {
    const [user, setUser] = useState(null)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id)

        const getUser = async () => {
            try {
                const res = await axiosInstance("/users?userId=" + friendId)
                console.log(res.data)
                setUser(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getUser()
    }, [conversation, currentUser])

    return (
        <div className='conversation'>
            <img src={user?.profilePicture ? PF+"person/"+user?.profilePicture : PF+"person/noAvatar.jpg"} alt="" className="conversationImg" />
            <span className="conversationName">{ user?.username}</span>
        </div>
    )
}
