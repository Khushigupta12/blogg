import React, { useEffect, useState } from 'react'
// import Header from '../../components/header/Header'/
import {Category}from '../../components/category/Category'
import { Card } from '../../components/blog/Card'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const [posts, setposts] = useState([])
  const {search} = useLocation()
  
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(
        "https://blogapi-h8nx.onrender.com/posts" + search
      );
      setposts(res.data);
    };
    fetchPost();
  }, [search]);
  return (
    <>
        <Category/>
        <Card posts={posts}/>
    </>
  )
}

export default Home