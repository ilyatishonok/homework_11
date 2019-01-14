import { ArticlesActionsTypes, IArticlesState, ArticleActions } from '../store/types/articles';

const initialState = {
    data: [],
    activeTab: '',
    error: '',
    isFetching: false,
};

const articlesReducer = (state: IArticlesState = initialState, action: ArticleActions): IArticlesState => {
    switch (action.type) {
        case ArticlesActionsTypes.FETCH_ARTICLES_REQUEST:
            return { ...state, activeTab: action.payload, isFetching: true, error: '' };

        case ArticlesActionsTypes.FETCH_ARTICLES_REQUEST_SUCCESS:
            return { ...state, data: action.payload, isFetching: false };

        case ArticlesActionsTypes.FETCH_ARTICLES_REQUEST_FAILURE:
            return { ...state, isFetching: false, error: action.payload };

        default: 
            return state;
    }
}

export default articlesReducer;