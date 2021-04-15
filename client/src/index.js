import React from 'react';
import ReactDOM from 'react-dom';
import SocketProvider from './SocketContext';
import App from './App';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <SocketProvider>
      <App />
    </SocketProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
