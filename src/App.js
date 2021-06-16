import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <Navbar />
      <div className="content">
        <Route component={Profile} />
        <Route component={Dialogs} />

        <Dialogs />
      </div>
    </div>
  );
}
export default App;
