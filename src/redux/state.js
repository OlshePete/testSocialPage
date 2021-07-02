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
        newMessageText:"hjg",
      },
    },
  _callSubscriber() {
  console.log("State was changed");
  },
  getState () {
    return this._state;
  },
  _addPost() {
    let newPost = {
      id: this._state.profilePage.postDB.length + 1,
      disription: this._state.profilePage.newPostText,
      likes: 0,
    };
      this._state.profilePage.postDB.push(newPost);
      this._state.profilePage.newPostText="";
      this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  _addMessage() {
    let newMessage = {
      id: this._state.messagePage.messagesDB.length + 1,
      text: this._state.messagePage.newMessageText,
    };
      this._state.messagePage.messagesDB.push(newMessage);
      this._state.messagePage.newMessageText="";
      this._callSubscriber(this._state);
  },
  _updateNewMessageText(newText) {
    this._state.messagePage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action){
    if (action.type === "ADD-POST"){
      this._addPost();
    } else if (action.type === "UPDATE_NEW_POST_TEXT"){
      this._updateNewPostText(action.newText);
    } else if (action.type === "UPDATE_NEW_MESSAGE_TEXT"){
      this._updateNewMessageText(action.newText);
    } else if (action.type === "ADD-MESSAGE"){
      this._addMessage();
    } 
  }
}

export default store;
window.store ={store};
