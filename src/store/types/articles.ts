export enum ArticlesActionsTypes {
    FETCH_ARTICLES_REQUEST = '@@articles/FETCH_ARTICLES_REQUEST',
    FETCH_ARTICLES_REQUEST_SUCCESS = '@@articles/FETCH_ARTICLES_REQUEST_SUCCESS',
    FETCH_ARTICLES_REQUEST_FAILED = '@@articles/FETCH_ARTICLES_REQUEST_FAILED',
};

export interface IArticle {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    source: {
        name: string;
    }
}

export interface IArticlesState {
    activeTab: string;
    data: IArticle[];
    isFetching: boolean;
    error: string;
}

export interface IFetchArticlesRequestAction {
    type: ArticlesActionsTypes.FETCH_ARTICLES_REQUEST;
    payload: string;
}

export interface IFetchArticlesRequestSuccessAction {
    type: ArticlesActionsTypes.FETCH_ARTICLES_REQUEST_SUCCESS;
    payload: IArticle[],
}

export interface IFetchArticlesRequestFailedAction {
    type: ArticlesActionsTypes.FETCH_ARTICLES_REQUEST_FAILED;
    payload: string;
}

export type ArticleActions = IFetchArticlesRequestAction | IFetchArticlesRequestFailedAction | IFetchArticlesRequestSuccessAction;