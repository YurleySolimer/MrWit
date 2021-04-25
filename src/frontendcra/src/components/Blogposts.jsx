import React, { Component } from 'react';
import '../assets/styles/components/Blogposts.scss';
import PostWidget from './PostWidget';

class Blogposts extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className='Blogposts'>
        <PostWidget title='Blog post title' date='04 - 01 - 2021' autor='Luis Méndez' category='Category' content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam cum accusamus architecto, tempore incidunt voluptates voluptatem facere, fugiat quisquam hic itaque, repellat molestias sunt! Minima animi id accusamus excepturi eveniet.' />
        <PostWidget title='Blog post title' date='04 - 01 - 2021' autor='Luis Méndez' category='Category' content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam cum accusamus architecto, tempore incidunt voluptates voluptatem facere, fugiat quisquam hic itaque, repellat molestias sunt! Minima animi id accusamus excepturi eveniet.' />
        <PostWidget title='Blog post title' date='04 - 01 - 2021' autor='Luis Méndez' category='Category' content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam cum accusamus architecto, tempore incidunt voluptates voluptatem facere, fugiat quisquam hic itaque, repellat molestias sunt! Minima animi id accusamus excepturi eveniet.' />
        <PostWidget title='Blog post title' date='04 - 01 - 2021' autor='Luis Méndez' category='Category' content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam cum accusamus architecto, tempore incidunt voluptates voluptatem facere, fugiat quisquam hic itaque, repellat molestias sunt! Minima animi id accusamus excepturi eveniet.' />
        <PostWidget title='Blog post title' date='04 - 01 - 2021' autor='Luis Méndez' category='Category' content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam cum accusamus architecto, tempore incidunt voluptates voluptatem facere, fugiat quisquam hic itaque, repellat molestias sunt! Minima animi id accusamus excepturi eveniet.' />
      </div>
    );
  }
}

export default Blogposts;
