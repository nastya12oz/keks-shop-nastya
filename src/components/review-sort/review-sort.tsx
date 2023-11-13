import { ChangeEvent } from 'react';
import { TFilterSortRating, TFilterSortDate } from '../../types/filters';

type ReviewSortProps = {
  onSortChange: (sortOption: TFilterSortRating | TFilterSortDate) => void;
}


function ReviewSort({onSortChange}: ReviewSortProps): JSX.Element {

  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSortOption = event.target.value as TFilterSortRating | TFilterSortDate;
    onSortChange(newSortOption);
  };

  const handleDateSortChange = (sortOption: TFilterSortDate) => {
    onSortChange(sortOption);
  };

  return(
    <div className="filter-sort">
      <div className="container">
        <div className="filter-sort__inner">
          <div className="filter-sort__filter-wrap">
            <h3 className="filter-sort__filter-title">Показать с рейтингом</h3>
            <div className="filter-sort__filter">
              <button className="filter-sort__filter-btn" type="button">Любой
                <svg className="filter-sort__filter-icon" width="14" height="15" aria-hidden="true">
                  <use xlinkHref="#icon-polygon"></use>
                </svg>
              </button>
              <ul className="filter-sort__filter-list">
                <li className="filter-sort__filter-item">
                  <div className="custom-toggle custom-toggle--sorting">
                    <input type="radio" id="review-sort-1" name="review-sort" value={TFilterSortRating.All} onChange={handleSortChange} />
                    <label className="custom-toggle__label" htmlFor="review-sort-1">Любой</label>
                  </div>
                </li>
                <li className="filter-sort__filter-item">
                  <div className="custom-toggle custom-toggle--sorting">
                    <input type="radio" id="review-sort-2" name="review-sort" value={TFilterSortRating.High} onChange={handleSortChange} />
                    <label className="custom-toggle__label" htmlFor="review-sort-2">Высокий</label>
                  </div>
                </li>
                <li className="filter-sort__filter-item">
                  <div className="custom-toggle custom-toggle--sorting">
                    <input type="radio" id="review-sort-3" name="review-sort" value={TFilterSortRating.Low} onChange={handleSortChange} />
                    <label className="custom-toggle__label" htmlFor="review-sort-3">Низкий</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="filter-sort__sort-wrap">
            <h3 className="filter-sort__sort-title">Сортировать по дате</h3>
            <div className="filter-sort__sort-btns-wrap">
              <button
                className="filter-sort__sort-btn filter-sort__sort-btn--inc"
                type="button"
                aria-label="Сортировать по возрастанию"
                onClick={() => handleDateSortChange(TFilterSortDate.Down)}
              >
                <svg className="filter-sort__sort-icon" width="19" height="13" aria-hidden="true">
                  <use xlinkHref="#icon-chevron-top"></use>
                </svg>
              </button>
              <button
                className="filter-sort__sort-btn filter-sort__sort-btn--desc"
                type="button"
                aria-label="Сортировать по убыванию"
                onClick={() => handleDateSortChange(TFilterSortDate.Top)}
              >
                <svg className="filter-sort__sort-icon" width="19" height="13" aria-hidden="true">
                  <use xlinkHref="#icon-chevron-top"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSort;
