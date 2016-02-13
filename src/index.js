import './style.css';

import React from 'react';
import { render } from 'react-dom';

import Main from './components/main/main';

import './api';

const App = React.createClass({
  render() {
    return <div>
      <Main />
    </div>;
  }
});

setTimeout(() => {
  render(<App />, document.getElementById('app'));
}, 500);
