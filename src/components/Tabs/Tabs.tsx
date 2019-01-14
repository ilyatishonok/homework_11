import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';
import { TabInterface } from '../../data/tabs';

export interface ITabProps {
    tabs: TabInterface[];
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const TabsContainer = styled.div`
    position: fixed;
    display: inline-flex;
    flex-wrap: wrap;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 0 10px black;
`;

const Tabs = (props: ITabProps) => {
    const { activeTab, tabs, onTabChange } = props;
    
    return (
        <TabsContainer>
           {tabs.map(tab => (
                <Tab
                    key={tab.id}
                    title={tab.title}
                    onTabChange={onTabChange}
                    selected={activeTab === tab.title}
                />
            ))} 
        </TabsContainer>
    );
}

export default Tabs;