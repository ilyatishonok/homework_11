import React, { ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';

interface ISearchBarProps {
    value: string;
    onSearchBarValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SeachBar = ({ value, onSearchBarValueChange }: ISearchBarProps) => (
    <TextField
        label="Search"
        type="search"
        margin="normal"
        variant="outlined"
        value={value}
        onChange={onSearchBarValueChange}
        fullWidth
    />
);

export default SeachBar;