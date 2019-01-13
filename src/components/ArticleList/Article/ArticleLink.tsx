import styled from 'styled-components';

export interface ArticleLinkProps{
    urlToImage: string;
}

const ArticleLink = styled.a.attrs<ArticleLinkProps, any>(({ urlToImage }: ArticleLinkProps) => ({
    style: {
        backgroundImage: `url(${urlToImage})`,
    },
}))`
    width: 100%;
    color: white;
    cursor: pointer;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    text-decoration: none;
`;

export default ArticleLink;