import React from 'react';
import s from './Profile.module.css'
import PersonTemplate from "./PersonTemplate/PersonTemplate.jsx"
import MyPosts from "./MyPosts/MyPosts.jsx"
import AddPosts from "./AddPosts/AddPosts.jsx"
import BackImg from "./BackImg/BackImg.jsx"

const Profile = (props) => {
  return (
  
    <div className={s.content}>
      <BackImg />
      <PersonTemplate />
      <AddPosts />
      <MyPosts posts={props.posts}/>
    </div>
  )
}

export default Profile;