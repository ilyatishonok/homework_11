import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import Screen from '../Screen';
import store from '../../store';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        min-height: 100%;
        margin: 0px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        font-family: fantasy;
    }

    #root {
        width: 100%;
    }
`;

const App: React.SFC<{}> = () => {
    return (
        <Provider store={store} >
            <GlobalStyle />
            <Screen />
        </Provider>
    );
}

export default App;