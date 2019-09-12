import React from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, start } from 'qiankun';
import './index.css';
import App from './App';
import SubOne from './subOne';
import SubTwo from './subOne';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function render(data) {
    const container=document.getElementsByClassName('main-project-container3')[0];

  ReactDOM.render(<SubOne loading={data.loading} content={data.appContent}/>, container);
}

function rende1({ appContent, loading }) {
    const container=document.getElementsByClassName('main-project-container4')[0];
    ReactDOM.render(<SubOne loading={loading} content={appContent}/>, container);
 }

function genActiveRule(routerPrefix) {
  return (location) => location.pathname.startsWith(routerPrefix);
}

registerMicroApps(
  [
    { 
      name: 'react app', // app name registered
      entry: '//localhost:3001',
      render, 
      props:{
        parentClass:'main-project-container3'
      },
      activeRule: genActiveRule('/about') },
    { 
      name: 'vue app',
      entry: '//localhost:4000', 
      render:rende1, 
      props:{
        parentClass:'main-project-container4'
      },
      activeRule: genActiveRule('/topics') 
    },
  ],
  {
    beforeLoad: [app => {
      console.log('before load', app);
    }],
    beforeMount: [app => {
      console.log('before mount', app);
    }],
    afterUnmount: [app => {
      console.log('after unload', app);
    }],
  },
);

start({ prefetch: true, jsSandbox: true });
