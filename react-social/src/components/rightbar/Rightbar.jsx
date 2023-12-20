import React from "react";
import "./rightbar.css"
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
    
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
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                
            </div>
        </div>
    )
}