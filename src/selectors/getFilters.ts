import { createSelector } from 'reselect';
import { RootState } from "../reducers";
import { IArticle } from '../store/types/articles';

const articlesSelector = (state: RootState) => state.articles.data;

export default createSelector(
    articlesSelector,
    (articles: IArticle[]): string[] => {
        const sources = articles.map(article => article.source.name);

        return [...new Set(sources)];
    }
);