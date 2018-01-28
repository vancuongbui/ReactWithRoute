import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';
import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new'

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
        <Switch>
          
          <Route path ="/posts/new" component = {PostsNew}/>
          <Route path = "/" component={PostsIndex} />          
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

  
