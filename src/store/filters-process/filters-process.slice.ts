// import { createSlice } from '@reduxjs/toolkit';
// import { FiltersData } from '../../types/state';
// import { TFilterSortRating, TFilterSortDate } from '../../types/filters';
// import { NameSpace } from '../../const';
// import { PayloadAction } from '@reduxjs/toolkit';


// const initialState: FiltersData = {
//   sortingByRating: TFilterSortRating.All,
//   sortingByDate: TFilterSortDate.Top
// };

// export const filtersProcess = createSlice({
//   name: NameSpace.Products,
//   initialState,
//   reducers: {
//     setFirstLevelFilter: (state, action: PayloadAction<FirstLevelFilter | null>) => {
//       // state.firstLevel = action.payload;
//     },
//     setSecondLevelFilter: (state, action: PayloadAction<SecondLevelFilter>) => {
//       // if (state.secondLevel.includes(action.payload)) {
//       //   state.secondLevel = state.secondLevel.filter((filter) => filter !== action.payload);
//       // } else {
//       //   state.secondLevel.push(action.payload);
//       // }
//     },
//     resetSecondFilter: (state) => {
//       // state.secondLevel = [];
//     },
//     setSortingTypeByRating: (state, action: PayloadAction<TFilterSortRating>) => {
//       state.sortingByRating = action.payload;
//     },
//     setSortingTypeByDate: (state, action: PayloadAction<TFilterSortDate>) => {
//       state.sortingByDate = action.payload;
//     },
//     resetSorting: (state) => {
//       state.sortingByRating = TFilterSortRating.All;
//       state.sortingByDate = TFilterSortDate.Top;
//     },
//   },
// });


// export const {
//   // setFirstLevelFilter,
//   // setSecondLevelFilter,
//   // resetSecondFilter,
//   setSortingTypeByDate,
//   setSortingTypeByRating,
//   resetSorting,
// } = filtersProcess.actions;
