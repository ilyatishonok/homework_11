import { IFiltersState, FilterActions, FiltersActionsTypes } from "../store/types/filters";

const initialState = {
    sort: 'Asc',
    search: '',
    filters: [],
}

const filtersReducer = (state: IFiltersState = initialState, action: FilterActions): IFiltersState => {
    switch (action.type) {
        case FiltersActionsTypes.SET_FILTERS:
            return { ...state, filters: action.payload };

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