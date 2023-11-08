// import { TFilterSortRating } from '../../types/filters';
// import { useAppDispatch, useAppSelector } from '../../hooks';
// import { getSortingTypeByRating } from '../../store/filters-process/filters-process.selectors';
// import { setSortingTypeByRating } from '../../store/filters-process/filters-process.slice';

// type FilterSortOptionProps = {
//   index: number;
//   type: TFilterSortRating;
// }

// function FilterSortOption({index, type}: FilterSortOptionProps): JSX.Element {

//   const dispatch = useAppDispatch();
//   const sortTypeRating = useAppSelector(getSortingTypeByRating);


//   return(
//     <li className="filter-sort__filter-item">
//       <div className="custom-toggle custom-toggle--sorting">
//         <input
//           type="radio"
//           id={`review-sort-${index}`}
//           name="review-sort"
//           checked={sortTypeRating === type}
//           onChange={() => dispatch(setSortingTypeByRating(type))}
//         />
//         <label className="custom-toggle__label" htmlFor={`review-sort-${index}`}>{type}</label>
//       </div>
//     </li>

//   );
// }

// export default FilterSortOption;

