import { TReviews } from '../../types/review';
import Review from '../review/review';


type ReviewsListProps = {
  reviews: TReviews;
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {


  return(


    <div className="comments__wrapper"> {
      reviews.map((review) => <Review review={review} key={review.id} />)
    }
    </div>

  );
}

export default ReviewsList;
