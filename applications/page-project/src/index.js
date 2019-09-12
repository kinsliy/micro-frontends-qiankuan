import React from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, start } from 'qiankun';
import './index.css';
import App from './App';
import SubOne from './subOne';
import SubTwo from './subTwo';
import * as serviceWorker from './serviceWorker';




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function render(data) {
  const container=document.getElementsByClassName('page-project-container7')[0];
  ReactDOM.render(<SubOne loading={data.loading} content={data.appContent}/>, container);
}

function rende1({ appContent, loading }) {
  const container=document.getElementsByClassName('page-project-container8')[0];
    ReactDOM.render(<SubTwo loading={loading} content={appContent}/>, container);
 }

function genActiveRule(routerPrefix) {
  return (location) => location.pathname.startsWith(routerPrefix);
}

registerMicroApps(
  [
    { 
      name: 'pagereact app', // app name registered
      entry: '//localhost:3001',
      render, 
      props:{
        parentClass:'pageSubOne'
      },
      activeRule: genActiveRule('/topics/home') },
    // { 
    //   name: 'pagevue app',
    //   entry: '//localhost:3002', 
    //   props:{
    //     parentClass:'page-project-container8'
    //   },
    //   render:rende1, 
    //   activeRule: genActiveRule('/topics/about') 
    // },
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


export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  console.log(props);
  ReactDOM.render(<App/>, document.getElementById('root98'));
}

export async function unmount() {
  //ReactDOM.unmountComponentAtNode(document.getElementsByClassName('page-project-container7')[0].getElementsByClassName('root')[0]);
  ReactDOM.unmountComponentAtNode(document.getElementById('root98'));
}


