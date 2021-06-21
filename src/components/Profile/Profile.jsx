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
      <AddPosts updateNewPostText={props.updateNewPostText} addPost={props.addPost} newPostText={props.newPostText}/>
      <MyPosts posts={props.posts.postDB}/>
    </div>
  )
}

export default Profile;