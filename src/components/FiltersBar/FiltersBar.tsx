import React, { Component, ReactNode, MouseEvent, ChangeEvent } from 'react';
import styled from 'styled-components';
import SeachBar from './SearchBar';
import FiltersSelectBar from './FiltersSelectBar/FiltersSelectBar';
import SortBar from './SortBar';
import { Button, withStyles } from '@material-ui/core';

const FiltersContainer = styled.div`
    margin: 10px;
    padding: 20px;
    border: 1px solid black;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
`;

const FilteredButton = withStyles({
    root: {
        background: '#491253',
        border: 0,
        color: 'white',
        height: 48,
        '&:hover': {
            background: '#712d7d',
        }
    },
})(Button);

export interface IFiltersBarProps {
    searchQuery: string;
    sourceFilters: string[];
    selectedSourceFilters: string[];
    sort: string;
    setSearchQuery: (query: string) => void;
    setSourceFilters: (sourceFilters: string[]) => void;
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
        this.props.setSourceFilters(event.target.value as any);
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
        const { searchQuery, selectedSourceFilters, sourceFilters, sort } = this.props;

        return (
            <React.Fragment>
                {this.state.isVisible && (
                    <FiltersContainer>
                        <FiltersSelectBar
                            onFiltersSelectBarChange={this.onFiltersSelectBarChange}
                            selectedSourceFilters={selectedSourceFilters}
                            sourceFilters={sourceFilters} 
                        />
                        <SeachBar
                            value={searchQuery}
                            onSearchBarValueChange={this.onSearchBarValueChange} 
                        />
                        <SortBar 
                            value={sort}
                            changeSort={this.onSortBarValueChange} 
                        />
                    </FiltersContainer>
                )}
                <FilteredButton onClick={this.onButtonVisibleClick}>
                    {this.state.isVisible ? 'Hide filters' : 'Show filters'}
                </FilteredButton>
            </React.Fragment>
        )
    }
}

export default FiltersBar;