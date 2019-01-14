import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Article from './Article';
import Loader from '../Loader';
import config from '../../constants/config';
import { IArticle } from '../../store/types/articles';

export interface ArticleListPropTypes {
    articles: IArticle[];
    error: string;
    isFetching: boolean;
    activeTab: string;
}

const Error = styled.div`
    color: red;
`;

const HighLight = styled.b`
    color: #491253;
`;

const ArticleList = ({ articles, isFetching, error, activeTab }: ArticleListPropTypes) => {
    if (isFetching) {
        return <Loader />
    }

    if (error) {
        <Error>{error}</Error>
    }

    if (!activeTab) {
        return (
            <div>
                Please, select any Tab to display <HighLight>20</HighLight> random articles of chosen category
            </div>
        );
    }

    return (
        <React.Fragment>
            {articles.map((article: IArticle): ReactNode => ( 
                <Article
                    key={article.title}
                    title={article.title} 
                    description={article.description}
                    url={article.url}
                    urlToImage={article.urlToImage || config.defaultUrlToImage}
                />
            ))}
        </React.Fragment>
    );
}

export default ArticleList;