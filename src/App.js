import React from 'react';
import './App.css';
import SocialCard from './components/SocialCard';
import BlogCard from './components/BlogCard';
import OnPageNav from './components/OnPageNav';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faComments, faBolt, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faHeart, faComments, faBolt, faLayerGroup)

function App() {
  return (
    <div className="App">
    	<OnPageNav />
      <BlogCard />
    </div>
  );
}

export default App;
