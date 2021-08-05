import React, { useState, useEffect } from 'react';
import { getAllPosts, getPostByID } from './api/MainApi';
import { PostInterface } from './interfaces/interfaces';

import './App.sass';

const App = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  const getPostsData = () => {
    getAllPosts()
        .then((data) => {
            setPosts(data);
        })
        .catch((err) => console.error(err));
}

  useEffect(() => {
    getPostsData();
    }, [])

  console.log(posts);

  return (
    <div className="App">
    </div>
  );
}

export default App;
