import { ProductCategory, ProductType, baseDisplayNames, fillingDisplayNames } from '../../const';

type CatalogFilterProps = {
  selectedBase: ProductCategory | null;
  setSelectedBase: React.Dispatch<React.SetStateAction<ProductCategory | null>>;
  selectedFillings: ProductType[];
  setSelectedFillings: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

function CatalogFilter({selectedBase, setSelectedBase, selectedFillings, setSelectedFillings}: CatalogFilterProps): JSX.Element {
  const bases = Object.values(ProductCategory);
  const fillings = Object.values(ProductType);

  const handleBaseSelect = (base: ProductCategory) => {
    if (base === selectedBase) {
      setSelectedBase(null);
      setSelectedFillings([]);
    } else {
      setSelectedBase(base);
    }
  };

  const handleFillingSelect = (filling: ProductType) => {
    if (selectedFillings.includes(filling)) {
      setSelectedFillings(selectedFillings.filter((f) => f !== filling));
    } else {
      setSelectedFillings([...selectedFillings, filling]);
    }
  };


  return (
    <div className="catalog-filter">
      <div className="container">
        <div className="catalog-filter__first-level">
          <h3 className="catalog-filter__title catalog-filter__title--first-level">основы</h3>
          <ul className="catalog-filter__list catalog-filter__list--first-level">
            {bases.map((base) => (
              <li key={base} className="catalog-filter__item catalog-filter__item--first-level">
                <button
                  className={`btn btn--filter-first-level ${selectedBase === base ? 'is-active' : ''}`}
                  onClick={() => handleBaseSelect(base)}
                >
                  {baseDisplayNames[base]}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {selectedBase && (
          <div className="catalog-filter__second-level">
            <h3 className="catalog-filter__title catalog-filter__title--second-level">начинки</h3>
            <ul className="catalog-filter__list catalog-filter__list--second-level">
              {fillings.map((filling) => (
                <li key={filling} className="catalog-filter__item catalog-filter__item--second-level">
                  <div className="custom-toggle custom-toggle--checkbox">
                    <input
                      type="checkbox"
                      value={filling}
                      id={`catalog-second-level-id-${filling}`}
                      name="catalog-second-level"
                      checked={selectedFillings.includes(filling)}
                      onChange={() => handleFillingSelect(filling)}
                    />
                    <label className="custom-toggle__label" htmlFor={`catalog-second-level-id-${filling}`}>
                      {fillingDisplayNames[filling]}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default CatalogFilter;
