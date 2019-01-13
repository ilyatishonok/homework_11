import React, { MouseEvent } from 'react';
import styled from 'styled-components';

interface ISortButtonProps {
    selected: boolean;
}

const BottomNavigation = styled.div`
    display: flex;
`;

const SortButton = styled.div<ISortButtonProps>`
    width: 50%;
    margin: 10px;
    background: ${ props => props.selected ? '#491253' : 'black'};
    border-radius: 20px;
    color: white;
    box-shadow: 0 0 10px black;
    cursor: pointer;
    user-select: none;

    &:hover {
        background: ${ props => props.selected ? '#712d7d' : 'green'};
    }
`

interface ISortBarProps {
    value: string;
    changeSort: (event: MouseEvent) => void;
}

const SortBar = ({ value, changeSort }: ISortBarProps) => (
    <BottomNavigation>
        <SortButton selected={value === 'Asc'} onClick={changeSort}>
            Asc
        </SortButton>
        <SortButton selected={value === 'Desc'} onClick={changeSort}>
            Desc
        </SortButton>
    </BottomNavigation>
);

export default SortBar;