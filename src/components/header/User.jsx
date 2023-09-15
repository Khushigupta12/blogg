import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import { IoSettingsOutline } from "react-icons/io5";
import { RiImageAddLine } from "react-icons/ri";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHelp } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { Context } from '../../context/Context';


const User = () => {

  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    window.location.replace("/")
    dispatch({ type: "LOGOUT" });
    // window.location.replace("/")
  };
  const [profileOpen, setProfileOpen] = useState(false);
  const close = () => {
    setProfileOpen(false);
  };

  const PublicFlo = "https://api-2jif.onrender.com/images/";
  return (
    <>
      <div className="profile">
        {user ? (
          <>
            <button
              className="img"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <img src={PublicFlo + user.profilePic} alt="" />
            </button>
            {profileOpen && (
              <div className="openProfile boxItems" onClick={close}>
                <Link to="/account">
                  <div className="image">
                    <div className="img">
                      <img src={PublicFlo+user.profilePic} alt="" />
                    </div>
                    <div className="text">
                      <h4>{user.username}</h4>
                      <p>{user.email}</p>
                    </div>
                  </div>
                </Link>
                <Link to="/create">
                  <button className="box">
                    <RiImageAddLine className="icon" />
                    <h4>Create Post</h4>
                  </button>
                </Link>
                <Link to="/account">
                  <button className="box">
                    <IoSettingsOutline className="icon" />
                    <h4>My Account</h4>
                  </button>
                </Link>
                {/* box me se link hta dena baad m */}
                <Link to="/login">
                  <button className="box">
                    <BsBagCheck className="icon" />
                    <h4>My Order</h4>
                  </button>
                </Link>
                <button className="box">
                  <AiOutlineHeart className="icon" />
                  <h4>Wishlist</h4>
                </button>
                <button className="box">
                  <GrHelp className="icon" />
                  <h4>Help</h4>
                </button>
                <button className="box" >
                  <BiLogOut className="icon" onClick={handleLogout} />
                  {user && <h4 onClick={handleLogout}>Log Out</h4>}
                </button>
              </div>
            )}
          </>
        ) : (
          <Link to="/login">
            <button>My Account</button>
          </Link>
        )}
      </div>
    </>
  );
}

export default User
