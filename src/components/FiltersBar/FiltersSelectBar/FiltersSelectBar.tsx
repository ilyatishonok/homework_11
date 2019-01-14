import React, { ChangeEvent } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export interface IFiltersSelectBar {
    sourceFilters: string[],
    selectedSourceFilters: string[],
    onFiltersSelectBarChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const FiltersSelectBar = ({ sourceFilters, selectedSourceFilters, onFiltersSelectBarChange }: IFiltersSelectBar) => {
    return (
        <FormControl fullWidth>
            <InputLabel htmlFor="filters">Filters</InputLabel>
            <Select
                    multiple
                    value={selectedSourceFilters}
                    onChange={onFiltersSelectBarChange}
                    input={<Input id="filters" />}
            >
                {sourceFilters.map(source => (
                    <MenuItem key={source} value={source} >
                        {source}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default FiltersSelectBar;