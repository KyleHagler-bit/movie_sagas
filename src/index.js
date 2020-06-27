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


function* getMovies(action) {
    //wrap it all in try catch
    try {
      const response = yield Axios.get('/api/movies');
    //   console.log('function*',response);
  
      yield put({ type: 'SET_MOVIES', payload: response.data })
    } catch (error) {
      console.log('Error fetching movies', error);
    //   alert('Unable to get  from server');
    }
  }

  function* getDetails(action){
      console.log('getDetails action', action)
    try {
        const response = yield Axios.get(`/api/details/${action.payload}`); 
        console.log('function*',response);
    
        yield put({ type: 'SET_DETAILS', payload: response.data }) //
      } catch (error) {
        console.log('Error fetching details', error);
      //   alert('Unable to get  from server');
      }

  }

// Create the rootSaga generator function
function* rootSaga() {
yield takeEvery('GET_MOVIES', getMovies)
yield takeEvery('GET_DETAILS',getDetails)
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

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
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
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
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();