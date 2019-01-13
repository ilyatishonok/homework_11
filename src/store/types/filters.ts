export enum FiltersActionsTypes {
    SET_FILTERS = '@@filters/SET_FILTERS',
    SET_SEARCH_QUERY = '@@filters/SET_SEARCH_QUERY',
    SET_SORT = '@@filters/SET_SORT',
    RESET_FILTERS = '@@filters/RESET_FILTERS',
};

export interface IFiltersState {
    sort: string;
    filters: string[]
    search: string;
}

export interface SetFiltersAction {
    type: FiltersActionsTypes.SET_FILTERS;
    payload: string[];
}

export interface SetSearchQueryAction {
    type: FiltersActionsTypes.SET_SEARCH_QUERY;
    payload: string;
}

export interface SetSortAction {
    type: FiltersActionsTypes.SET_SORT;
    payload: string;
}

export interface ResetFiltersAction {
    type: FiltersActionsTypes.RESET_FILTERS;
}

export type FilterActions = SetFiltersAction | SetSearchQueryAction | SetSortAction | ResetFiltersAction;