import React, { Component } from 'react';
import '../assets/styles/containers/HelpArticle.scss';
import img from '../assets/static/images/faq_article.jpg';

class HelpArticle extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className='HelpArticle'>
        <article className='post__content'>
          <section className='post__header'>
            <div className='post__header--img'>
              <img src={img} alt='Imagen de la categoría' className='post__header--img--img' />
            </div>
            <div className='post__header__info'>
              <h1 className='post__header__title'>Título del articulo</h1>
              <div className='info__post__card'>
                <span className='breadcrumb'>FAQ &gt; Category</span>
                <span className='article__info'>04 - 02 - 2021</span>
              </div>
            </div>
          </section>
          <section className='post__body'>
            <div className='body__content'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet facilis cupiditate earum molestiae. Voluptatibus totam quas laudantium culpa cumque repellendus quos labore repellat quasi iste provident tempore nihil ipsa quis dolore, dolorum iusto necessitatibus! Ipsam rerum dicta mollitia nulla voluptate modi expedita dolores error magnam nobis ratione molestias et adipisci, obcaecati consequatur odit dignissimos illo necessitatibus autem tempora dolore eligendi! Illum quae suscipit provident iste culpa ea repellat, dolore vitae neque impedit vel, debitis dolor est ducimus doloribus officia cum tempora maxime. Asperiores quo corporis rerum aliquid voluptas, fugit eligendi culpa sequi magni accusantium eveniet quas porro rem laudantium aliquam veritatis nemo quisquam magnam quidem iure, odio ipsa reiciendis! Aperiam, earum quidem sapiente consequatur alias quis neque quasi ipsum. In impedit blanditiis est vero nemo, fugiat exercitationem rerum, quis suscipit illo iste nesciunt amet aliquid sed perferendis esse obcaecati velit minima quo dolor quam soluta earum. Nemo ipsam odio doloribus!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolorem laudantium non delectus corrupti deserunt omnis, facilis quas maiores beatae illum explicabo voluptate nam. Optio doloribus iste accusantium sed facere aspernatur ratione temporibus, soluta fugiat suscipit. Totam rerum dolor delectus odio ad! In debitis rem fuga eos, omnis magni quas tempora. Accusamus sint nobis, hic ipsum nisi repellendus perspiciatis rerum ratione cum doloribus nulla quos quidem deleniti similique repellat non blanditiis culpa vero illo doloremque vitae labore et laborum excepturi? Incidunt deserunt laboriosam nisi assumenda non culpa recusandae ut quod. Veritatis, error autem provident repudiandae harum hic laborum consequatur magnam illo facilis nihil aliquid totam quasi nisi quae cum dignissimos modi numquam! Et consequuntur praesentium esse quaerat facere possimus non.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, asperiores. Tenetur nihil necessitatibus ipsum vitae temporibus quas autem soluta, obcaecati sunt tempore itaque, cumque dignissimos provident accusamus magnam quis odio. Omnis, voluptatum earum vero est explicabo harum labore sequi temporibus molestias ipsa modi ipsam veniam sed incidunt accusantium eaque asperiores libero quos ut! Molestias eos aperiam ut quidem quaerat saepe praesentium nihil laborum aspernatur. Magnam, incidunt, quas doloremque cupiditate aperiam quasi labore ipsam recusandae consequuntur, minus temporibus voluptatem quia facilis iusto quos! Beatae maiores vitae corporis sequi hic, voluptatibus id! Voluptatibus quod aliquid blanditiis cumque, et amet laborum commodi quisquam accusantium provident reprehenderit recusandae nemo expedita placeat incidunt ratione hic, perspiciatis odio a, repudiandae sunt! Dolor quod distinctio magnam asperiores quam, inventore ea voluptas sint laudantium sunt, reprehenderit optio recusandae.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ratione delectus vitae possimus, distinctio rerum quos sint id sed sequi eaque debitis quis, consequuntur maiores incidunt quod veniam pariatur exercitationem ipsa nisi ipsam quibusdam! Nam, dicta aliquid. Rerum repellendus fuga dignissimos eveniet enim, quos perspiciatis iure possimus voluptates temporibus quas atque eligendi cum optio, error, sequi saepe fugiat mollitia porro accusantium officiis dolor inventore. Ducimus cum aut fugit tenetur, nihil aliquam animi! Hic ipsa, iusto at aspernatur tempore ex ipsam deleniti, tempora laboriosam dolore commodi, ab repellendus inventore cum. Facere consectetur illo dignissimos perspiciatis incidunt reprehenderit laudantium tenetur exercitationem fuga.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quisquam voluptatibus consectetur iste incidunt voluptatum temporibus accusamus, velit neque quasi numquam eaque, perspiciatis doloremque ad, dignissimos quod quidem harum soluta vitae enim explicabo excepturi vel. Mollitia ex magni, voluptates numquam dolorum nostrum possimus assumenda voluptas amet facilis accusamus quisquam nihil atque velit adipisci nam delectus earum tenetur sed obcaecati commodi? Esse suscipit incidunt, sapiente ducimus nulla iure nesciunt minus doloribus tenetur repellendus quas molestias possimus, optio quo architecto praesentium corrupti autem obcaecati pariatur, exercitationem eius quod dolorem et totam. Autem laborum mollitia, dolorem hic ex molestias molestiae non porro minus quas labore ratione accusamus id atque minima sequi odio quisquam quo aliquid obcaecati eveniet veniam vitae. Nisi officia velit nulla.</p>
              <div className='post__footer'>
                <h2 className='post__footer--title'>¿No estás contento con esta respuesta?</h2>
                <button type='button' className='post__footer--CAT'>¡Escríbenos!</button>
              </div>
            </div>
          </section>
        </article>
      </div>
    );
  }
}

export default HelpArticle;
