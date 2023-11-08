import { TReviews } from '../../types/review';
import Review from '../review/review';

type ReviewsListProps = {
  reviews: TReviews;
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return(
    <section className="comments">
      <h2 className="visually-hidden">Список комментариев</h2>
      <div className="container">
        <div className="comments__wrapper"> {
          reviews.map((review) => <Review review={review} key={review.id} />)
        }
        </div>
      </div>
    </section>
  );
}

export default ReviewsList;
