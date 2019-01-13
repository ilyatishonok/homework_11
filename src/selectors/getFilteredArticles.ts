import { createSelector } from 'reselect';
import { RootState } from "../reducers";
import { IArticle } from "../store/types/articles";

const getFilteredArticles = (state: RootState): IArticle[] => {
    const query = state.filters.search;
    const filters = state.filters.filters;
    const sort = state.filters.sort;
    let articles = state.articles.data;

    if (filters.length) {
        articles = state.articles.data.filter(article => {
            return filters.includes(article.source.name);
        });
    }

    articles = articles.filter((article) => article.title.includes(query) || article.description.includes(query));

    if (!sort) {
        return articles;
    }

    const sortedArray = articles.sort((firstArticle, secondArticle) => {
        return firstArticle.title.localeCompare(secondArticle.title);
    });

    if (sort === 'Asc') {
        return sortedArray;
    }

    return sortedArray.reverse();
}

export default getFilteredArticles;