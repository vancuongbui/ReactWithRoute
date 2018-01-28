import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';
import promise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';
import PostsIndex from './components/posts_index'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class Hello extends React.Component {
  render() {
    return <div>Hello! </div>
  }
}

class Goodbye extends React.Component {
  render() {
    return <div>Goodbye! </div>
  }
}

class TestRender extends React.Component {
  render() {
    return <h1>This is the title of the page</h1>
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <TestRender />
        <Route path = "/" component={PostsIndex} />
        
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

  
