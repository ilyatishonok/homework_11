import React, { Component, ReactNode, MouseEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import SeachBar from './SearchBar';
import FiltersSelectBar from './FiltersSelectBar/FiltersSelectBar';
import SortBar from './SortBar';
import { Button } from '@material-ui/core';

const Container = styled.div`
    padding: 20px;
`;

export interface IFiltersBarProps {
    searchQuery: string;
    filters: string[];
    filterValues: string[];
    sort: string;
    setSearchQuery: (query: string) => void;
    setFilters: (filters: string[]) => void;
    setSort: (sort: string) => void;
}

export interface IFiltersBarState {
    isVisible: boolean;
}

class FiltersBar extends Component<IFiltersBarProps, IFiltersBarState> {
    state = {
        isVisible: false,
    }

    onSearchBarValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.props.setSearchQuery(event.target.value);
    }

    onFiltersSelectBarChange = (event: ChangeEvent<HTMLSelectElement>) => {
        //Workaround to issue https://github.com/mui-org/material-ui/issues/13782
        this.props.setFilters(event.target.value as any);
    }

    onSortBarValueChange = (event: MouseEvent) => {
        const sortValue = event.currentTarget.textContent || 'Asc';
        
        this.props.setSort(sortValue === this.props.sort ? '' : sortValue);
    }

    onButtonVisibleClick = () => {
        this.setState((state) => ({
            isVisible: !state.isVisible,
        }));
    }

    render(): ReactNode {
        const { searchQuery, filterValues, filters, sort } = this.props;

        return (
            <React.Fragment>
                {this.state.isVisible && (
                    <Container>
                        <FiltersSelectBar onFiltersSelectBarChange={this.onFiltersSelectBarChange} values={filterValues} sources={filters} />
                        <SeachBar value={searchQuery} onSearchBarValueChange={this.onSearchBarValueChange} />
                        <SortBar value={sort} changeSort={this.onSortBarValueChange} />
                    </Container>
                )}
                <Button onClick={this.onButtonVisibleClick} >
                    {this.state.isVisible ? 'Hide filters' : 'Show filters'}
                </Button>
            </React.Fragment>
        )
    }
}

export default FiltersBar;