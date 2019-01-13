import styled from 'styled-components';

export interface TabButtonProps {
    selected: boolean;
}

const TabButton = styled.div`
    cursor: pointer;
    width: 25%;
    background: ${ ((props: TabButtonProps) => props.selected ? '#491253' : 'black')};
    color: white;
    font-family: fantasy;
    font-size: 20px;
    transition: all ease .1s;
    user-select: none;
    text-align: center;
    padding: 15px;

    &:hover {
        background: #491253;
        border: 0px;
    }

    @media(max-width: 750px) {
        width: 50%;
    }
    
    @media(max-width: 520px) {
        width: 100%;
    }
`;

export default TabButton;