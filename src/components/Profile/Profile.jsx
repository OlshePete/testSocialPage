import React from 'react';
import s from './Profile.module.css'
import PersonTemplate from "./PersonTemplate/PersonTemplate.jsx"
import MyPosts from "./MyPosts/MyPosts.jsx"
import AddPosts from "./AddPosts/AddPosts.jsx"
import BackImg from "./BackImg/BackImg.jsx"

const Profile = () => {

  let PostDB = [
    {
        id: 0,
        disription: "Hey, why everyone love me so much?",
        likes: 19,
    },
    {
        id: 1,
        disription: "Как выровнять текст или блок по вертикали в CSS?",
        likes: 32,
    },
    {
        id: 2,
        disription: "Как не поместить по центру текст с display inline block?",
        likes: 15,
    },
    {
        id: 3,
        disription: "Выравнивание полей формы с помощью CSS.",
        likes: 62,
    },
  ]
  return (
    <div className={s.content}>
      <BackImg />
      <PersonTemplate />
      <AddPosts />
      <MyPosts posts={PostDB}/>
    </div>
  )
}

export default Profile;