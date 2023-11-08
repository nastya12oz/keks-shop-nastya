// import Header from '../../components/header/header';
import ReviewForm from '../../components/review-form/review-form';
import Footer from '../../components/footer/footer';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { useEffect } from 'react';
import { fetchProductByIdAction, fetchReviewsAction } from '../../store/api-actions';
import { getProduct } from '../../store/products-data/products-data.selectors';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { getReviews, getReviewsErrorStatus } from '../../store/reviews-data/reviews-data.selectors';
import NoReview from '../../components/no-review/no-review';
import ReviewsError from '../../components/reviews-error/reviews-error';
import ReviewsList from '../../components/reviews-list/reviews-list';


function ProductScreen(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(fetchProductByIdAction(id));
      dispatch(fetchReviewsAction(id));
    }
  }, [id, dispatch]);

  const product = useAppSelector(getProduct);
  const reviews = useAppSelector(getReviews);
  const hasReviewsError = useAppSelector(getReviewsErrorStatus);

  // console.log(reviews);

  if (!product) {
    return <NotFoundScreen />;
  }

  return(
    <div className="wrapper">
      {/* <Header /> */}
      <section className="item-details item-details--form-open">
        <div className="container">
          <div className="item-details__wrapper">
            <div className="item-details__top-wrapper">
              <h2 className="item-details__name">{product.title}</h2><span className="item-details__price">{product.price}</span>
            </div>
            <div className="item-details__weight-wrapper"><span className="item-details__weight">{product.weight} грамм</span></div>
            <div className="item-details__bottom-wrapper">
              <div className="item-details__image-wrapper">
                <picture>
                  <source type="image/webp" srcSet={product.previewImageWebp} />
                  <img src={product.previewImage} width={241} height={245} alt={product.title} />
                </picture><span className="item-details__label">Новинка</span>
              </div>
              <div className="item-details__review-wrapper">
                <div className="star-rating star-rating--big">
                  <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg><span className="star-rating__count">{product.rating}</span>
                </div>
                <div className="item-details__text-wrapper"><span className="item-details__text">Цитрусовый десерт с тонким сливочным вкусом, лёгкой свежестью и низким содержанием калорий сд</span>
                  <button className="item-details__more"><span className="visually-hidden">Читать полностью</span>
                    <svg width="27" height="17" aria-hidden="true">
                      <use xlinkHref="#icon-more"></use>
                    </svg>
                  </button>
                </div>
                <div className="item-details__button-wrapper">
                  <button className="item-details__like-button">
                    <svg width="45" height="37" aria-hidden="true">
                      <use xlinkHref="#icon-like"></use>
                    </svg><span className="visually-hidden">Понравилось</span>
                  </button>
                  <button className="btn btn--second" type="button">Отменить отзыв</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReviewForm />
      {hasReviewsError && <ReviewsError id={id}/>}
      {reviews.length === 0 && !hasReviewsError && <NoReview />}
      <ReviewsList reviews={reviews} />

      <Footer />
    </div>
  );
}

export default ProductScreen;
