function CatalogFilter(): JSX.Element {
  return (
    <div className="catalog-filter">
      <div className="container">
        <div className="catalog-filter__first-level">
          <h3 className="catalog-filter__title catalog-filter__title--first-level">основы</h3>
          <ul className="catalog-filter__list catalog-filter__list--first-level">
            <li className="catalog-filter__item catalog-filter__item--first-level">
              <button className="btn btn--filter-first-level" type="button">Бисквит</button>
            </li>
            <li className="catalog-filter__item catalog-filter__item--first-level">
              <button className="btn btn--filter-first-level" type="button">Десерт</button>
            </li>
            <li className="catalog-filter__item catalog-filter__item--first-level">
              <button className="btn is-active btn--filter-first-level" type="button">Чизкейк</button>
            </li>
            <li className="catalog-filter__item catalog-filter__item--first-level">
              <button className="btn btn--filter-first-level" type="button">Песочное</button>
            </li>
          </ul>
        </div>
        <div className="catalog-filter__second-level">
          <h3 className="catalog-filter__title catalog-filter__title--second-level">начинки</h3>
          <ul className="catalog-filter__list catalog-filter__list--second-level">
            <li className="catalog-filter__item catalog-filter__item--second-level">
              <div className="custom-toggle custom-toggle--checkbox">
                <input type="checkbox" value="chocolate" id="catalog-second-level-id-1" name="catalog-second-level" />
                <label className="custom-toggle__label" htmlFor="catalog-second-level-id-1">Шоколадный</label>
              </div>
            </li>
            <li className="catalog-filter__item catalog-filter__item--second-level">
              <div className="custom-toggle custom-toggle--checkbox">
                <input type="checkbox" value="vegetarian" id="catalog-second-level-id-2" name="catalog-second-level" checked />
                <label className="custom-toggle__label" htmlFor="catalog-second-level-id-2">Вегетарианский</label>
              </div>
            </li>
            <li className="catalog-filter__item catalog-filter__item--second-level">
              <div className="custom-toggle custom-toggle--checkbox">
                <input type="checkbox" value="new-york" id="catalog-second-level-id-3" name="catalog-second-level" />
                <label className="custom-toggle__label" htmlFor="catalog-second-level-id-3">Нью-Йорк</label>
              </div>
            </li>
            <li className="catalog-filter__item catalog-filter__item--second-level">
              <div className="custom-toggle custom-toggle--checkbox">
                <input type="checkbox" value="citric" id="catalog-second-level-id-4" name="catalog-second-level" checked />
                <label className="custom-toggle__label" htmlFor="catalog-second-level-id-4">Лимонный</label>
              </div>
            </li>
            <li className="catalog-filter__item catalog-filter__item--second-level">
              <div className="custom-toggle custom-toggle--checkbox">
                <input type="checkbox" value="vanilla" id="catalog-second-level-id-5" name="catalog-second-level" />
                <label className="custom-toggle__label" htmlFor="catalog-second-level-id-5">Ваниль</label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CatalogFilter;
