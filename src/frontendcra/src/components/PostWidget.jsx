import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/PostWidget.scss';
import background from '../assets/static/images/post_background.jpg';

class PostWidget extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {

    const { title, date, autor, category, content } = this.props;

    return (
      <div className='Post'>
        <div className='post__img'>
          <Link to='/blog/post'>
            <img src={background} alt='Imagen del post' className='post__img__img' />
          </Link>
        </div>
        <div className='post__structure'>
          <div className='post__structure__header'>
            <Link to='/blog/post'>
              <h2 className='header__title'>{title}</h2>
            </Link>
            <Link to={`/blog/search=?${autor}`}>
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
              <Link to={`/blog/search=?${category}`}>{category}</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default PostWidget;
