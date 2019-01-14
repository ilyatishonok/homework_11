import { 
    SetSearchQueryAction,
    FiltersActionsTypes,
    SetSourceFiltersAction,
    SetSortAction,
    ResetFiltersAction
} from '../store/types/filters';

export const setSearchQuery = (query: string): SetSearchQueryAction => ({
    type: FiltersActionsTypes.SET_SEARCH_QUERY,
    payload: query,
});

export const setFilters = (filters: string[]): SetSourceFiltersAction => ({
    type: FiltersActionsTypes.SET_SOURCE_FILTERS,
    payload: filters,
});

export const setSort = (sort: string): SetSortAction => ({
    type: FiltersActionsTypes.SET_SORT,
    payload: sort,
});

export const resetFilters = (): ResetFiltersAction => ({
    type: FiltersActionsTypes.RESET_FILTERS,
});