import React from 'react';
import ArticlesContainer from '../../containers/ArticlesContainer/ArticlesContainer';
import TabsContainer from '../../containers/TabsContainer/TabsContainer';
import tabs from '../../data/tabs';
import FiltersBarContainer from '../../containers/FiltersBarContainer';
import ContentView from '../ContentView';

const Screen = () => (
    <React.Fragment>
        <TabsContainer tabs={tabs} />
        <ContentView />
    </React.Fragment>
);

export default Screen;