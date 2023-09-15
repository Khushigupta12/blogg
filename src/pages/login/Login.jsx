import React, {  useContext, useState } from "react";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";
export const Login = () => {
  const navigate = useNavigate();
  const { dispatch, FetchData } = useContext(Context);
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGINSTART" });
    try {
       const { data } = await axios.post(
         `https://blogapi-h8nx.onrender.com/auth/login`,
         {
           username: username,
           password: password,
         }
       );
       console.log(data);
       dispatch({ type: "LOGINSUCC", payload: data });
       navigate("/");
      //  if(data){
      //   // const myForm = new FormData();
      //   // myForm.set("user", data._id);
      //   // dispatch(authActions.login(myForm));
      //    localStorage.setItem("userId", data._id);
      //  dispatch(authActions.login());
      //  navigate("/");
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOGINFAILED" });
      navigate("/register");
    }
  }
  console.log(FetchData);
  const handleusername = (e) => {
    setusername(e.target.value);
  }
  const handlepassword = (e) => {
    setpassword(e.target.value);
  }
  // const userRef = useRef();
  // const passRef = useRef();
  // const { dispatch, FetchData } = useContext(Context);
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   dispatch({ type: "LOGINSTART" });
  //   try {
  //     const res = await axios.post("/auth/login", {
  //       username: userRef.current.value,
  //       password: passRef.current.value,
  //     });
  //      console.log(userRef.current.value);
  //     dispatch({ type: "LOGINSUCC", payload: res.data });
  //     window.location.replace("/");
  //   } catch (error) {
  //     dispatch({ type: "LOGINFAILED" });
  //     window.location.replace("/account");
  //   }
  //   // window.location.replace("/");
  // };
  // //console.log(user)
  // console.log(FetchData);
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Login</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <span>Username *</span>
            <input
              type="text"
              required
              name="username"
              onChange={handleusername}
              value={username}
            />
            <span>Password *</span>
            <input
              type="password"
              required
              name="password"
              onChange={handlepassword}
              value={password}
            />
            <button className="button" type="submit" disabled={FetchData}>
              Log in
            </button>

            <Link
              to="https://blogapi-h8nx.onrender.com/register"
              className="link"
              style={{ color: "blue", marginTop: "5px" }}
            >
              Register
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};
