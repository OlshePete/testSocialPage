import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
  return (
      <div className="app_wrapper">
        <Header />
        <Navbar />
        <div className="content">
          <Route path='/profile'  render={ () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
          <Route path='/dialogs'  render={ () => <Dialogs messagePage={props.state.messagePage} dispatch={props.dispatch}/>} />
          <Route path='/news'  render={ () => <News/>} />
          <Route path='/music'  render={ () => <Music/>} />
          <Route path='/settings'  render={ () => <Settings/>} />
        </div>
      </div>
  );
}
export default App;
