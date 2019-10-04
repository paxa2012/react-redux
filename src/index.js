import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Router ,  Route , Link, browserHistory } from 'react-router-dom';
import reducer from './reducers';
import {Provider} from 'react-redux';
import { createBrowserHistory } from 'history';

import Home from './containers/home';
import Auth from './containers/auth';
import DitalPhoto from './containers/detalphoto';


localStorage.setItem('start', 0);
localStorage.setItem('end', 10);


const unsplashAPI = [
]

  const history = createBrowserHistory();
  const store = createStore(reducer, unsplashAPI);

/* 
store.subscribe(() => {
    console.log('subscribe', store.getState())
  })
 */
    
  ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route exact path='/' component={Home}/> 
      <Route exact path='/auth' component={Auth}/>
      <Route path='/photo/:index' component={DitalPhoto}/> 
    </Router>
  </Provider>
  ), document.getElementById('app'))
  