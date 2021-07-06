import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const ADD_POST = 'ADD_POST';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let store = {
  _state: {
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
      newPostText: "",
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
      newMessageText: "",
    },
  },
  _callSubscriber() {
    console.log("State was changed");
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = dialogsReducer(this._state.messagePage, action);
    this._callSubscriber(this._state);
  }
}
export default store;
window.store = { store };
