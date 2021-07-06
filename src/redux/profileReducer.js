
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState ={

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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postDB.length + 1,
                disription: state.newPostText,
                likes: 0,
            };
            state.postDB.push(newPost);
            state.newPostText = "";
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}

export const addPostCreator = () => ({ type: ADD_POST })
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export default profileReducer;