import React from "react";
import avatar from '../img/avatar.jpg';
import './Avatar.css';

function Avatar(){
    return(
        <div className="ADE">
          <img
            src={avatar}
            alt="logo"
          />
        </div>
    )
}
export default Avatar;