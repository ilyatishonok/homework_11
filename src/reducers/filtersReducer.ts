import { IFiltersState, FilterActions, FiltersActionsTypes } from "../store/types/filters";

const initialState = {
    sort: '',
    search: '',
    sourceFilters: [],
}

const filtersReducer = (state: IFiltersState = initialState, action: FilterActions): IFiltersState => {
    switch (action.type) {
        case FiltersActionsTypes.SET_SOURCE_FILTERS:
            return { ...state, sourceFilters: action.payload };

        case FiltersActionsTypes.SET_SEARCH_QUERY:
            return { ...state, search: action.payload };
        
        case FiltersActionsTypes.SET_SORT:
            return { ...state, sort: action.payload };
        
        case FiltersActionsTypes.RESET_FILTERS:
            return initialState;

        default:
            return state;
    }
}

export default filtersReducer;