export enum FiltersActionsTypes {
    SET_SOURCE_FILTERS = '@@filters/SET_SOURCE_FILTERS',
    SET_SEARCH_QUERY = '@@filters/SET_SEARCH_QUERY',
    SET_SORT = '@@filters/SET_SORT',
    RESET_FILTERS = '@@filters/RESET_FILTERS',
};

export enum SORT_TYPES {
    ASC = 'Asc',
    DESC = 'Desc',
}

export interface IFiltersState {
    sort: string;
    sourceFilters: string[]
    search: string;
}

export interface SetSourceFiltersAction {
    type: FiltersActionsTypes.SET_SOURCE_FILTERS;
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

export type FilterActions = SetSourceFiltersAction | SetSearchQueryAction | SetSortAction | ResetFiltersAction;