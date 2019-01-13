import React from 'react';
import styled from 'styled-components';
import ArticleLink from './ArticleLink';

const ArticleContent = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    min-height: 200px;
    padding: 30px;
    transition: all ease .2s;

    &:hover {
        background-color: rgba(0,0,0,0.5);
    }
`;

const ArticleTitle = styled.h1`
    margin: 0px;
`;

const ArticleDescription = styled.div`
    margin: 0px;
`;

export interface ArticleProps {
    title: string;
    urlToImage: string;
    description: string;
    url: string;
}

const Article: React.SFC<ArticleProps> = props => {
    const { title, urlToImage, description, url } = props;

    return (
        <ArticleLink urlToImage={urlToImage} href={url}>
            <ArticleContent>
                <ArticleTitle>{title}</ArticleTitle>
                <ArticleDescription>{description}</ArticleDescription>
            </ArticleContent>
        </ArticleLink>
    );
}

export default Article;