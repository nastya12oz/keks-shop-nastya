// import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import CatalogScreen from '../../pages/catalog-screen/catalog-screen';
import { useAppSelector } from '../../hooks';
import { getProductsList } from '../../store/products-data/products-data.selectors';


function App(): JSX.Element {
  const productsList = useAppSelector(getProductsList);
  console.log(productsList);

  return(
    // <WelcomeScreen />
    <CatalogScreen />
  );
}

export default App;
