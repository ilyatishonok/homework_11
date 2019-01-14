import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers'; 
import { 
    ArticleActions,
    ArticlesActionsTypes,
    IFetchArticlesRequestAction,
    IFetchArticlesRequestSuccessAction,
    IArticle,
    IFetchArticlesRequestFailureAction,
} from '../store/types/articles';
import { FilterActions } from '../store/types/filters';
import { resetFilters } from './filtersActions';
import config from '../constants/config';

export interface IFetchArticlesResponse {
    articles: IArticle[];
}

export const fetchArticlesRequest = (tab: string): IFetchArticlesRequestAction => ({
    type: ArticlesActionsTypes.FETCH_ARTICLES_REQUEST,
    payload: tab,
});

export const fetchArticlesRequestSuccess = (articles: IArticle[]): IFetchArticlesRequestSuccessAction => ({
    type: ArticlesActionsTypes.FETCH_ARTICLES_REQUEST_SUCCESS,
    payload: articles,
});

export const fetchArticlesRequestFailure = (error: string): IFetchArticlesRequestFailureAction => ({
    type: ArticlesActionsTypes.FETCH_ARTICLES_REQUEST_FAILURE,
    payload: error,
});

export const fetchArticles = (tab: string): ThunkAction<void, RootState, void, ArticleActions | FilterActions> => {
    return (dispatch) => {
        dispatch(fetchArticlesRequest(tab));
        dispatch(resetFilters());

        const page = Math.floor((Math.random() * 50) + 1);
        const apiKey: string | undefined = process.env.REACT_APP_API_KEY;
        const apiSource: string | undefined = process.env.REACT_APP_API_URL;

        fetch(`${apiSource}?page=${page}&apiKey=${apiKey}&q=${tab}`).then(res => res.json())
            .then((data: IFetchArticlesResponse) => {
                dispatch(fetchArticlesRequestSuccess(data.articles));
            })
            .catch(() => {
                dispatch(fetchArticlesRequestFailure(config.defaultErrorMessage));
            });
    }
}