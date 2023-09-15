import React, { useContext, useEffect, useState } from "react"
import "./details.css"
import "../../components/header/header.css"
import img from "../../assets/images/product1.jpg"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { Context } from "../../context/Context"

export const DetailsPages = () => {
  const location = useLocation()
  console.log(location)
  const path = location.pathname.split("/")[2]
  //setp 2
  const [post, setPost] = useState({})
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(
        "https://blogapi-h8nx.onrender.com/posts/" + path
      );
      console.log(res)
      console.log(path);
      //setp 2
      setPost(res.data)
    }
    getPost()
  }, [path])

  // step 3
  // file create garne time add garne
  const PublicFlo = "https://blogapi-h8nx.onrender.com/images/";
  const { user } = useContext(Context)

  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`/posts/${post._id}`,  { username: user.username } )
  //     window.location.replace("/")
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  return (
    <>
      <section className="singlePage">
        <div className="container">
          {/*<div className='left'>{post.photo && <img src={post.photo} alt='' />}</div>*/}
          <div className="left">
            {post.photo && <img src={PublicFlo + post.photo} alt="" />}
          </div>
          <div className="right">
            c
            {post.username === user?.username && (
              <div className="buttons">
                <button className="button">
                  <BsPencilSquare />
                </button>
                <button className="button">
                  <AiOutlineDelete />
                </button>
              </div>
            )}
            <h1>{post.title}</h1>
            <p>{post.desc}</p>
            <p>
              Author:{" "}
              <Link
                to={`https://blogapi-h8nx.onrender.com/?user=${post.username}`}
              >
                {post.username}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
