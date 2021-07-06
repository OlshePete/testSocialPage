
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messagesDB.length + 1,
        text: state.newMessageText,
      };
      state.messagesDB.push(newMessage);
      state.newMessageText = "";
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;;
      return state;

    default:
      return state;
  }
}

export const addMessageCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })
export default dialogsReducer;