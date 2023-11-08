import Header from '../../components/header/header';
import ItemDetails from '../../components/item-details/item-details';
import ReviewForm from '../../components/review-form/review-form';
import Footer from '../../components/footer/footer';


function ProductScreen(): JSX.Element {
  return(
    <div className="wrapper">
      <Header />
      <ItemDetails />
      <ReviewForm />
      <Footer />
    </div>
  );
}

export default ProductScreen;
