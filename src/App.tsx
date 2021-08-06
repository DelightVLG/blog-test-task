import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.sass';
import { BlogsPage } from './pages/BlogsPage/BlogsPage';
import { SingleBlogPage } from './pages/SingleBlogPage/SingleBlogPage';

const App = () => {

  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={BlogsPage}/>
        <Route path="/:postId" component={SingleBlogPage} />
      </Switch>
    </div>
  );
}

export default App;
