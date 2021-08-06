import React from 'react';
import {Header} from "./components/Header/Header";
import {BlogHeader} from "./components/BlogHeader/BlogHeader";
import {BlogMain} from "./components/BlogMain/BlogMain";
import './App.sass';

const App = () => {

  return (
    <div className="App">
      <Header />
      <main id="main">
        <BlogHeader />
        <BlogMain />
      </main>
    </div>
  );
}

export default App;
