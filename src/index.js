import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import Axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';


//get movies from database and put onto DOM!
function* getMovies(action) {
    //wrap it all in try catch
    try {
        const response = yield Axios.get('/api/movies');
        yield put({ type: 'SET_MOVIES', payload: response.data })
    } catch (error) {
        console.log('Error fetching movies', error);
    }
}

//get and put details onto DOM!
function* getDetails(action) {
    console.log('getDetails action', action.payload)
    try {
        const response = yield Axios.get(`/api/details/${action.payload}`);
        yield put({ type: 'SET_DETAILS', payload: response.data })
    } catch (error) {
        console.log('Error fetching details', error);
    }
}

//Once updated details come in, GET details and movies again. Do I need to get both?
function* updateMovies(action) {
    console.log('LOOK AT ME', action.payload)
    try {
        const response = yield Axios.put(`/api/details/`, action.payload);
        yield put({ type: 'GET_DETAILS', payload: response.data })
        yield put({ type: 'GET_MOVIES', payload: response.data })
        console.log('function*', response.data);
    } catch (error) {
        console.log('Error updating movie (index.js)', error);
    }
}

//NOT YET FUNCTIONAL need id right? otherwise need to figure out search and find in SQL
function* removeGenre(action) {
    console.log('remove genre action', action)
    try {
        const response = yield Axios.delete(`/api/details/`, action.payload);
    } catch (error) {
        console.log('Error removing genre', error);
    }
}

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies)
    yield takeEvery('GET_DETAILS', getDetails)
    yield takeEvery('UPDATE_MOVIES', updateMovies)
    yield takeEvery('REMOVE_GENRES', removeGenre)
    // yield takeEvery ('CURRENT_ITEM', updateMovies)
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const currentItem = (state = [], action) => {
    switch (action.type) {
        case 'CURRENT_ITEM':
            return action.payload;
        default:
            console.log('currentItem state is', state)
            return state;
    }
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
//So I never really used this? I did most my genre related things in details.router
//i.e. SQL/Database
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie details
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
        currentItem
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
