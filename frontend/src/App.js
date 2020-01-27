import React, { Component } from 'react';
import './App.scss';
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header/>
        <LeftSideBar/>
        <MainContent/>
        <Footer/>
      </div>
    );
  }
}

export default App;
