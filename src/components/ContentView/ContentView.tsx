import React from 'react';
import styled from 'styled-components';
import ArticlesContainer from '../../containers/ArticlesContainer';
import FiltersBarContainer from '../../containers/FiltersBarContainer';

const ContentLayout = styled.div`
    margin-left: 200px;
    margin-right: 200px;
    padding-top: 54px;
    box-shadow: 0 0 20px black;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    @media(max-width: 1020px) {
        margin-left: 100px;
        margin-right: 100px;
    }
    
    @media(max-width: 750px) {
        margin-left: 50px;
        margin-right: 50px;
        padding-top: 108px;
    }
    
    @media(max-width: 520px) {
        margin: 0px;
        padding-top: 216px;
    }
`;

const ContentView = () => (
    <ContentLayout>
        <ArticlesContainer />
    </ContentLayout>
);

export default ContentView;