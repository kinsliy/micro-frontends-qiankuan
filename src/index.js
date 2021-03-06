import React from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, start } from 'qiankun';
import './index.css';
import App from './App';
import SubOne from './subOne';
import SubTwo from './subTwo';
import SubThree from './subThree';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import * as serviceWorker from './serviceWorker';
window.myapp={
  info:'测试'
}

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
    ReactDOM.render(<SubTwo loading={loading} content={appContent}/>, container);
 }

 function rende2({ appContent, loading }) {
  const container=document.getElementsByClassName('main-project-container5')[0];
  ReactDOM.render(<SubThree loading={loading} content={appContent}/>, container);
}


function genActiveRule(routerPrefix) {
  if(routerPrefix==='#/'){
    return (location) => location.hash=='#/';
  }
 
  return (location) => {
  
   return  location.hash.startsWith(routerPrefix)
  };
}

registerMicroApps(
  [
    { 
      name: 'react app', // app name registered
      entry: '//localhost:3002',
      render, 
      props:{
        parentClass:'subOne'
      },
      activeRule: genActiveRule('#/') },
    { 
      name: 'vue app',
      entry: '//localhost:3001', 
      render:rende1, 
      props:{
        parentClass:'subThree'
      },
      activeRule: genActiveRule('#/topics') 
    },
    { 
      name: 'vue112 app',
      entry: '//localhost:3004', 
      render:rende2, 
      props:{
        parentClass:'main-project-container4'
      },
      activeRule: genActiveRule('#/topics') 
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

start({ prefetch: false, jsSandbox: true });
