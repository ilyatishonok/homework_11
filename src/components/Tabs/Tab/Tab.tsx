import React, { Component, ReactNode } from 'react';
import TabButton from './TabButton';

export interface TabPropTypes {
    title: string;
    onTabChange: (tabId: string) => void,
    selected: boolean;
}

export default class Tab extends Component<TabPropTypes> {
    private onTabClick = (): void => {
        const { selected, onTabChange, title } = this.props;

        if (!selected) {
            onTabChange(title);
        }
    }

    public render(): ReactNode {
        const { title, selected } = this.props;

        return (
            <TabButton selected={selected} onClick={this.onTabClick}>
                {title}
            </TabButton>
        );
    }
}