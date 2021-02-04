import React from 'react';
import '../assets/styles/containers/Blog.scss';
import Blogposts from '../components/Blogposts';

const Blog = () => {
  return (
    <div className='Blog'>
      <div className='blog__content'>
        <h1 className='blog__title'>Blog</h1>
        <div className='blog__posts'>
          <Blogposts />
        </div>
      </div>
    </div>
  );
};

export default Blog;
