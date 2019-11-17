import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import axios from 'axios';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore();

    window.store = store;
    ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});


window.axios = axios;

