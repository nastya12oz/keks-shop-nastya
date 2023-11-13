import Header from '../../components/header/header';
import ReviewForm from '../../components/review-form/review-form';
import Footer from '../../components/footer/footer';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { useEffect, useState } from 'react';
import { fetchProductByIdAction, fetchReviewsAction } from '../../store/api-actions';
import { getProduct } from '../../store/products-data/products-data.selectors';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { getReviews, getReviewsErrorStatus } from '../../store/reviews-data/reviews-data.selectors';
import NoReview from '../../components/no-review/no-review';
import ReviewsError from '../../components/reviews-error/reviews-error';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Rating from '../../components/rating/rating';
import { getProductLoadingStatus } from '../../store/products-data/products-data.selectors';
import Loading from '../../components/loading/loading';
import AddToFavoritesButtonInProduct from '../../components/add-to-favorites-button-in-product/add-to-favorites-button-in-product';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { AuthorizationStatus } from '../../const';
import BackButton from '../../components/back-button/back-button';
import classNames from 'classnames';
import { DISPLAYED_REVIEWS_COUNT, PRODUCT_DESCRIPTION_MAX_LENGTH } from '../../const';


function ProductScreen(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const isProductLoading = useAppSelector(getProductLoadingStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;


  useEffect(() => {
    if (id) {
      dispatch(fetchProductByIdAction(id));
      dispatch(fetchReviewsAction(id));
    }
  }, [id, dispatch]);

  const product = useAppSelector(getProduct);
  const reviews = useAppSelector(getReviews);
  const hasReviewsError = useAppSelector(getReviewsErrorStatus);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [isFullInfo, setFullInfo] = useState(false);


  const handleReviewButtonClick = () => {
    setShowReviewForm(!showReviewForm);
  };

  const [displayedReviewsCount, setdisplayedReviewsCount] = useState(DISPLAYED_REVIEWS_COUNT);

  const handleShowMoreButtonClick = () => {
    setdisplayedReviewsCount((prevCount) => prevCount + DISPLAYED_REVIEWS_COUNT);
  };

  const reviewsToShow = reviews.slice(0, displayedReviewsCount);

  if(isProductLoading) {
    return <Loading />;
  }

  if (!product) {
    return <NotFoundScreen />;
  }


  return(
    <div className="wrapper">
      <Header />
      <main>
        <h1 className="visually-hidden">{isAuthorized ? 'Карточка: пользователь авторизован' : 'Карточка: пользователь не авторизован' }</h1>
        <BackButton />
        <section className={classNames('item-details', {'item-details--form-open': isAuthorized})}>
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
                  </picture>
                  {product.isNew && <span className="item-details__label">Новинка</span>}
                </div>
                <div className="item-details__review-wrapper">
                  <div className="star-rating star-rating--big">
                    <Rating rating={product.rating} />

                    <span className="star-rating__count">{product.reviewCount}</span>
                  </div>
                  <div className="item-details__text-wrapper"><span className="item-details__text">{isFullInfo ? product.description : product.description.slice(0, PRODUCT_DESCRIPTION_MAX_LENGTH)}</span>
                    <button className={classNames('item-details__more', {'visually-hidden': isFullInfo || product.description.length < PRODUCT_DESCRIPTION_MAX_LENGTH})}><span className="visually-hidden">Читать полностью</span>
                      <svg width="27" height="17" aria-hidden="true">
                        <use xlinkHref="#icon-more"></use>
                      </svg>
                    </button>
                  </div>
                  <div className="item-details__button-wrapper">
                    <AddToFavoritesButtonInProduct id={id} />
                    {isAuthorized &&
                      <button className="btn btn--second" type="button" onClick={handleReviewButtonClick}> {showReviewForm ? 'Отменить отзыв' : 'Оставить отзыв' }</button>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {showReviewForm && <ReviewForm id={id} />}
        {/* <FilterSort /> */}
        {hasReviewsError && <ReviewsError id={id}/>}
        {reviews.length === 0 && !hasReviewsError && <NoReview />}
        <section className="comments">
          <div className="container">
            <h2 className="visually-hidden">Список комментариев</h2>
            <ReviewsList reviews={reviewsToShow} />

            <div className="comments__show-more">
              {reviewsToShow.length < reviews.length ? <button className="btn btn--second comments__button" type="button" onClick={handleShowMoreButtonClick}>Показать еще</button> : null}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default ProductScreen;
