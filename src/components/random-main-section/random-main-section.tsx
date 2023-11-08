function RandomMainSection(): JSX.Element {
  return(
    <section className="random-main">
      <div className="container">
        <h2 className="random-main__title">кексы</h2>
        <ul className="random-main__list">
          <li className="random-main__item">
            <div className="card-item">
              <a className="card-item__img-link" href="#">
                <div className="card-item__img-wrapper">
                  <picture>
                    <source type="image/webp" srcSet="img/content/blueberry-cake.webp, img/content/blueberry-cake@2x.webp 2x"><img src="img/content/blueberry-cake.jpg" srcSet="img/content/blueberry-cake@2x.jpg 2x" width="241" height="245" alt="Торт голубика." />
                    </source>
                  </picture>
                </div><span className="card-item__label">Новинка</span>
              </a>
              <button className="card-item__favorites card-item__favorites--active"><span className="visually-hidden">Добавить в избранное</span>
                <svg width="51" height="41" aria-hidden="true">
                  <use xlinkHref="#icon-like"></use>
                </svg>
              </button>
              <a className="card-item__link" href="#">
                <h3 className="card-item__title"><span>Торт Голубика</span></h3>
              </a>
            </div>
          </li>
          <li className="random-main__item">
            <div className="card-item">
              <a className="card-item__img-link" href="#">
                <div className="card-item__img-wrapper">
                  <picture>
                    <source type="image/webp" srcSet="img/content/chocolate-pie.webp, img/content/chocolate-pie@2x.webp 2x"><img src="img/content/chocolate-pie.jpg" srcSet="img/content/chocolate-pie@2x.jpg 2x" width="241" height="245" alt="Шоколадный кекс." />
                    </source>
                  </picture>
                </div>
              </a>
              <button className="card-item__favorites"><span className="visually-hidden">Добавить в избранное</span>
                <svg width="51" height="41" aria-hidden="true">
                  <use xlinkHref="#icon-like"></use>
                </svg>
              </button>
              <a className="card-item__link" href="#">
                <h3 className="card-item__title"><span>Шоколадный Кекс</span></h3>
              </a>
            </div>
          </li>
          <li className="random-main__item">
            <div className="card-item">
              <a className="card-item__img-link" href="#">
                <div className="card-item__img-wrapper">
                  <picture>
                    <source type="image/webp" srcSet="img/content/lemon-pie.webp, img/content/lemon-pie@2x.webp 2x"><img src="img/content/lemon-pie.jpg" srcSet="img/content/lemon-pie@2x.jpg 2x" width="241" height="245" alt="Лимонный чизкейк." />
                    </source>
                  </picture>
                </div><span className="card-item__label">Новинка</span>
              </a>
              <button className="card-item__favorites"><span className="visually-hidden">Добавить в избранное</span>
                <svg width="51" height="41" aria-hidden="true">
                  <use xlinkHref="#icon-like"></use>
                </svg>
              </button>
              <a className="card-item__link" href="#">
                <h3 className="card-item__title"><span>Лимонный Чизкейк</span></h3>
              </a>
            </div>
          </li>
          <li className="random-main__item">
            <a className="random-main__link" href="#">
              <div className="random-main__icon-wrapper">
                <div className="random-main__icon">
                  <svg width="120" height="130" aria-hidden="true">
                    <use xlinkHref="#icon-keks"></use>
                  </svg>
                </div>
              </div>
              <h3 className="random-main__subtitle">Все кексы</h3>
            </a>
          </li>
        </ul>
      </div>
    </section>

  );
}

export default RandomMainSection;
