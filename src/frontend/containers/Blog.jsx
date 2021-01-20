import React from 'react';
import '../assets/styles/containers/Blog.scss';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Blogposts from '../components/Blogposts';

const Blog = () => {
  return (
    <div className='Blog'>
      <Header user='client' />
      <div className='blog__content'>
        <h1 className='blog__title'>Blog</h1>
        <div className='blog__posts'>
          <Blogposts />
        </div>
      </div>
      <Menu user='client' />
    </div>
  );
};

export default Blog;
