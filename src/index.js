import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/app'; // Our custom react component
import {Homepage } from "./components/lockerbox"
import { IndexRoute, Router, Route, hashHistory, IndexRedirect } from 'react-router';
import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
   <Router history={hashHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Homepage}/>

      </Route>
   </Router>,
  document.getElementById('root')
);
