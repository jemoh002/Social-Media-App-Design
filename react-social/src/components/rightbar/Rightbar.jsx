import React, { useContext, useEffect, useState } from "react";
import "./rightbar.css"
import { Users } from "../../dummyData";
import Online from "../online/Online";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add } from "@material-ui/icons";

export default function Rightbar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [friends, setFriends] = useState([])
    const { user: currentUser } = useContext(AuthContext)
    const [followed, setFollowed] = useState(false)

    
    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get("/users/friends/" + user._id);
                setFriends(friendList.data)
            } catch (err) {
                console.log(err)
            }
        };
        getFriends();
    }, [user._id])

    const handleClick = async () => {
        try {
            
        } catch (err) {
            console.log(err)
        }
    }

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img src="assets/tigerad.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={ u} />
                    ))}

                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                {user.username !== currentUser.username && (
                    <button className="rightbarFollowButton" onClick={handleClick}>
                        Follow <Add/>
                    </button>
                )}
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City: </span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From: </span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship: </span>
                        <span className="rightbarInfoValue">
                            {user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}
                        </span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    {friends.map((friend) => (
                        <Link to={"/profile/"+friend.username} style={{textDecoration:"none"}}>
                            <div className="rightbarFollowing">
                                <img src=
                                    {
                                        friend.profilePicture
                                        ? PF + "person/" + friend.profilePicture
                                        : PF + "person/noAvatar.jpg"
                                    }
                                    alt="" className="rightbarFollowingImg" />
                                <span className="rightbarFollowingName">{friend.username }</span>
                            </div>
                        </Link>
                        
                    ))}
                    
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}