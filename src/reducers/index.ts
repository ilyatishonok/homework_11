import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import filtersReducer from './filtersReducer';
import { IArticlesState } from '../store/types/articles';
import { IFiltersState } from '../store/types/filters';

export interface RootState {
    articles: IArticlesState;
    filters: IFiltersState;
}

const rootReducer = combineReducers<RootState>({
    articles: articlesReducer,
    filters: filtersReducer,
});

export default rootReducer;