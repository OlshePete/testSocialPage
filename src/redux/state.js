// import { rerenderEntireTree } from "./../render";

let rerenderEntireTree = () => {}

let state = {
  profilePage: {
    postDB: [
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
    ],


    newPostText:"your news...",
  },

  messagePage: {
    dialogsData: [
      {
        id: 0,
        name: "Pete",
      },
      {
        id: 1,
        name: "Tatiana",
      },
      {
        id: 2,
        name: "Vladimir",
      },
      {
        id: 3,
        name: "Alexey",
      },
      {
        id: 4,
        name: "Nikolay",
      },
    ],
    messagesDB: [
      { id: 0, text: "Hi, how are you? m?" },
      { id: 1, text: "Hello, maybe cup of cofe?" },
      { id: 2, text: "My lord, how old are you?" },
      { id: 3, text: "My lord, how old are you?" },
      { id: 4, text: "My lord, how old are you?" },
    ],
  },
};

export let addPost = () => {
  
  let newPost = {
    id: state.profilePage.postDB.length + 1,
    disription: state.profilePage.newPostText,
    likes: 0,
  };
  state.profilePage.postDB.push(newPost);
  state.profilePage.newPostText="";
  rerenderEntireTree(state);

};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);

};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}
export default state;
