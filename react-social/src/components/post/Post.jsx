import React from 'react'
import "./post.css"
import { MoreVert } from '@material-ui/icons'

function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
              <div className="postTop">
                  <div className="postTopLeft">
                      <img src="/assets/person/kristina_shusho1.jpg" alt="" className="postProfileImg" />
                      <span className="postUsername">Kristina Shusho</span>
                      <span className="postDate">5 mins ago</span>
                  </div>
                  <div className="postTopRight">
                      <MoreVert />
                  </div>
              </div>
              <div className="postCenter">
                  <span className="postText">Hey! Its my first post:)</span>
                  <img src="/assets/person/kristina_shusho1.jpg" alt="" className="postImg" />
              </div>
              <div className="postBottom">
                  <div className="postBottomLeft">
                      <img className='likeIcon' src="assets/like.jpg" alt="" />
                      <img className='likeIcon' src="assets/heart.jpg" alt="" />
                      <span className="postLikeCounter">32 people like it</span>
                  </div>
                  <div className="postBottomRight">
                      <span className="postCommentText">9 comments</span>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Post
