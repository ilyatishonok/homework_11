import { createSelector } from 'reselect';
import { RootState } from "../reducers";
import { SORT_TYPES } from '../store/types/filters';

export const searchQuerySelector = (state: RootState) => state.filters.search;
export const sourceFiltersSelector = (state: RootState) => state.filters.sourceFilters;
export const sortSelector = (state: RootState) => state.filters.sort;
export const articlesSelector = (state: RootState) => state.articles.data;

export default createSelector(
    [searchQuerySelector, sourceFiltersSelector, sortSelector, articlesSelector],
    (searchQuery, sourceFilters, sort, articles) => {
        if (!articles.length) {
            return articles;
        }

        let newArticles = articles;

        if (sourceFilters.length) {
            newArticles = newArticles.filter(article => {
                return sourceFilters.includes(article.source.name);
            });
        }

        if (searchQuery) {
            const formattedQuery = searchQuery.toLowerCase();

            newArticles = newArticles.filter((article) => {
                return article.title.toLowerCase().includes(formattedQuery) ||
                    article.description.toLowerCase().includes(formattedQuery)
            });
        }

        if (!sort) {
            return newArticles;
        }
    
        newArticles = newArticles.sort((firstArticle, secondArticle) => {
            return firstArticle.title.localeCompare(secondArticle.title);
        });

        if (sort === SORT_TYPES.ASC) {
            return newArticles;
        } else if (sort === SORT_TYPES.DESC) {
            return newArticles.reverse();
        } else {
            return newArticles;
        }
    }
);