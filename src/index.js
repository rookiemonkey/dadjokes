import React from 'react';
import ReactDOM from 'react-dom';
import ReactHowler from 'react-howler'
import './assets/scss/_index.scss';
import './assets/vendor/bootstrap-grid.min.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ReactHowler
      src={require('./assets/sounds/sillychicken.mp3')}
      playing={true}
      loop={true}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);