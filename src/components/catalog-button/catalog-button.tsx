type CatalogButtonProps = {
  toTop?: boolean;
  onShowMoreButtonClick?: () => void;
}

function CatalogButton({toTop, onShowMoreButtonClick}: CatalogButtonProps): JSX.Element {
  return (

    toTop ? (
      <div className="catalog__button-wrapper">
        <button
          className="btn btn--second"
          type="button"
          onClick={() => window.scrollTo(0, 0)}
        >В начало
        </button>
      </div>
    ) : (
      <div className="catalog__button-wrapper">
        <button className="btn btn--second" type="button" onClick={onShowMoreButtonClick}>Показать еще</button>
      </div>
    )

  );
}

export default CatalogButton;
