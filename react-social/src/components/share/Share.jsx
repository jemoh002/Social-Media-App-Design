import React, { useContext, useRef, useState } from 'react'
import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"

export default function Share() {
    const { user } = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef()
    const [file, setFile] = useState(null)

    const submitHander = async (e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            description: desc.current.value
        }
        try {
            await axios.post("/posts", newPost)
        } catch (err) {
            
        }
    }

  return (
      <div container="share">
          <div className="shareWrapper">
              <div className="shareTop">
                  <img src={user.profilePicture ? PF+"person/"+user.profilePicture : PF+"person/noAvatar.jpg"} alt="" className="shareProfileImg" />
                  <input placeholder={`What's in your mind ${user.username}?`} className="shareInput" ref={ desc} />
              </div>
              <hr className='shareHr'/>
              <form className="shareBottom" onSubmit={submitHander}>
                  <div className="shareOptions">
                      <label htmlFor='file' className="shareOption">
                          <PermMedia htmlColor='tomato' className='shareIcon'/>
                          <span className='shareOptionText'>Photo or Video</span>
                          <input
                              style={{ display: "none" }}
                              type="file" id='file'
                              accept='.png,.jpeg,.jpg'
                              onChange={(e) => setFile(e.target.files[0])}
                          />
                      </label>
                      <div className="shareOption">
                          <Label htmlColor='blue' className='shareIcon'/>
                          <span className='shareOptionText'>Tag</span>
                      </div>
                      <div className="shareOption">
                          <Room htmlColor='green' className='shareIcon'/>
                          <span className='shareOptionText'>Location</span>
                      </div>
                      <div className="shareOption">
                          <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                          <span className='shareOptionText'>Feelings</span>
                      </div>
                  </div>
                  <button className="shareButton" type='submit'>Share</button>
              </form>
          </div>
          
    </div>
  )
}
