import React, { ChangeEvent } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export interface IFiltersSelectBar {
    sources: string[],
    values: string[],
    onFiltersSelectBarChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const FiltersSelectBar = ({ sources, values, onFiltersSelectBarChange }: IFiltersSelectBar) => {
    return (
        <FormControl fullWidth>
            <InputLabel htmlFor="filters">Filters</InputLabel>
            <Select
                    multiple
                    value={values}
                    onChange={onFiltersSelectBarChange}
                    input={<Input id="filters" />}
            >
                {sources.map(source => (
                    <MenuItem key={source} value={source} >
                        {source}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default FiltersSelectBar;