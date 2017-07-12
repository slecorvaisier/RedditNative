import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './configureStore';

const AppContainer = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default AppContainer;