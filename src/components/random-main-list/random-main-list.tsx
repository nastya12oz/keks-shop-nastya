import RandomMainLastCard from '../random-main-last-card/random-main-last-card';
import RandomMainCard from '../random-main-card/random-main-card';
import { TProductCardSmallList } from '../../types/product';

type RandomMainListProps = {
  randomCards: TProductCardSmallList;
}

function RandomMainList({ randomCards }: RandomMainListProps): JSX.Element {
  return (
    <ul className="random-main__list">
      {randomCards.map((randomCard) => (
        <li key={randomCard.id} className="random-main__item">
          <RandomMainCard card={randomCard} />
        </li>
      ))}

      <li className="random-main__item">
        <RandomMainLastCard />
      </li>
    </ul>
  );
}

export default RandomMainList;
