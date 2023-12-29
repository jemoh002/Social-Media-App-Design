import React, { useContext, useEffect, useState } from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import axios from "axios"
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

export default function Feed({username}) {
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/" + user._id);
      console.log(`res data: ${res.data}`)
      setPosts(res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }))
    };
    fetchPosts();
  }, [username, user])
  
  return (
    <div className='feed'>
      <div className="feedWrapper">
        {(!username || username === user?.username) && <Share />}
        <Link to={"/messenger"}>Messenger</Link>
        {posts.map((p) => (
          <Post key={p._id} post={ p} />
        ))}
        
        
      </div>
    </div>
  )
}
