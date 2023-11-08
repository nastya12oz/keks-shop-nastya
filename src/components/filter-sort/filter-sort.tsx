import { getSortingTypeByDate, getSortingTypeByRating } from '../../store/filters-process/filters-process.selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TFilterSortRating } from '../../types/filters';
import FilterSortOption from '../filter-sort-option/filter-sort-option';


function FilterSort(): JSX.Element {

  const dispatch = useAppDispatch();
  const sortTypeRating = useAppSelector(getSortingTypeByRating);
  const sortTypeDate = useAppSelector(getSortingTypeByDate);

  return(
    <div className="filter-sort">
      <div className="container">
        <div className="filter-sort__inner">
          <div className="filter-sort__filter-wrap">
            <h3 className="filter-sort__filter-title">Показать с рейтингом</h3>
            <div className="filter-sort__filter">
              <button className="filter-sort__filter-btn" type="button">{sortTypeRating}
                <svg className="filter-sort__filter-icon" width="14" height="15" aria-hidden="true">
                  <use xlinkHref="#icon-polygon"></use>
                </svg>
              </button>
              <ul className="filter-sort__filter-list">
                {Object.values(TFilterSortRating).map((type, index) => <FilterSortOption key={type} type={type} index={index + 1} />)}
              </ul>
            </div>
          </div>
          <div className="filter-sort__sort-wrap">
            <h3 className="filter-sort__sort-title">Сортировать по дате</h3>
            <div className="filter-sort__sort-btns-wrap">
              <button className="filter-sort__sort-btn filter-sort__sort-btn--inc filter-sort__sort-btn--active" type="button" aria-label="сортировка по возрастанию">
                <svg className="filter-sort__sort-icon" width="19" height="13" aria-hidden="true">
                  <use xlinkHref="#icon-chevron-top"></use>
                </svg>
              </button>
              <button className="filter-sort__sort-btn filter-sort__sort-btn--desc" type="button" aria-label="сортировка по убыванию">
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

export default FilterSort;
