import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navbar />
        <div className="content">
          <Route path='/profile'  render={ () => <Profile posts={props.state.profilePage.postDB} />} />
          <Route exact path='/dialogs'  render={ () => <Dialogs users={props.state.messagePage.dialogsData} messagesList={props.state.messagePage.messagesDB}/>} />
          <Route path='/news'  render={ () => <News/>} />
          <Route path='/music'  render={ () => <Music/>} />
          <Route path='/settings'  render={ () => <Settings/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
