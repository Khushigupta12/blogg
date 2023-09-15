import React, { useState } from 'react'
import back from "../../assets/images/my-account.jpg";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
export const Register = () => {
    const navigate = useNavigate();
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`https://blogapi-h8nx.onrender.com//auth/register`,{
                username: username,
                email:email,
                password: password
            })
      console.log(data);
            data && navigate("/login")
        } catch (error) {
            console.log(error);
            seterror(true)
        }
    }
    const handleemail = (e) => {
        setemail(e.target.value)
    }
    const handleuser = (e) => {
      setusername(e.target.value);
    };
    const handlepass = (e) => {
      setpassword(e.target.value);
    };
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Register</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <span>Email address *</span>
            <input
              type="text"
              name="email"
              onChange={handleemail}
              value={email}
            />
            <span>Username *</span>
            <input
              type="text"
              required
              name="username"
              onChange={handleuser}
              value={username}
            />
            <span>Password *</span>
            <input
              type="password"
              required
              name="password"
              onChange={handlepass}
              value={password}
            />
            <button type="submit" className="button">
              Register
            </button>
          </form>

          {error && <span style={{ color: "red" }}>Someting went wrong</span>}
        </div>
      </section>
    </>
  );
}
