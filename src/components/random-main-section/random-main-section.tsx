import RandomMainList from '../random-main-list/random-main-list';
import { useAppSelector } from '../../hooks';
import { getProductsList } from '../../store/products-data/products-data.selectors';


function RandomMainSection(): JSX.Element {
  const productsList = useAppSelector(getProductsList);
  const shuffledProductsList = [...productsList].sort(() => 0.5 - Math.random());
  const randomThreeItems = shuffledProductsList.slice(0, 3);

  return(
    <section className="random-main">
      <div className="container">
        <h2 className="random-main__title">кексы</h2>
        <RandomMainList randomCards={randomThreeItems} />
      </div>
    </section>

  );
}

export default RandomMainSection;
