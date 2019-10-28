import React from 'react';
import './App.css';
import SocialCard from './components/SocialCard';
import BlogCard from './components/BlogCard';
import MainArticleCard from './components/MainArticleCard';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faComments } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faHeart, faComments)

function App() {
  return (
    <div className="App">
      <MainArticleCard />
      <SocialCard />
      <BlogCard />

    </div>
  );
}

export default App;
