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

function App() {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navbar />
        <div className="content">
          <Route path='/profile'  component={Profile} />
          {/* <Route exact path='/dialogs'  component={Dialogs} /> */}
         
          <Route exact path='/dialogs'  component={Dialogs} />
          <Route path='/news'  component={News} />
          <Route path='/music'  component={Music} />
          <Route path='/settings'  component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
