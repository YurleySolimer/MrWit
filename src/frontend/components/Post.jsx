import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Post.scss';
import background from '../assets/static/images/post_background.jpg';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {

    const { title, date, autor, category, content } = this.props;

    return (
      <div className='Post'>
        <div className='post__img'>
          <Link to='#'>
            <img src={background} alt='Imagen del post' className='post__img__img' />
          </Link>
        </div>
        <div className='post__structure'>
          <div className='post__structure__header'>
            <Link to='#'>
              <h2 className='header__title'>{title}</h2>
            </Link>
            <Link to='#'>
              <span className='header__autor'>{autor}</span>
            </Link>
          </div>
          <div className='post__structure__content'>
            {content}
          </div>
          <div className='post__structure__footer'>
            <span>
              {date}
              {' | '}
              <Link to='#'>{category}</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
