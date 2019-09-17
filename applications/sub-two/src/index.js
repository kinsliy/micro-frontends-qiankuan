import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'weui';
import { BrowserRouter as Router,Switch ,Route} from 'react-router-dom'
import 'react-weui/build/packages/react-weui.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';

//  ReactDOM.render(<Router>
   
   
//   <App />
 
   
//    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export async function bootstrap() {
    console.log('react app bootstraped');
  }
  
  export async function mount(props) {
    console.log(props);
    
    ReactDOM.render(<Router><App/></Router>, document.getElementsByClassName(props.parentClass)[0].getElementsByClassName('root')[0]);
  }
  
  export async function unmount(props) {
  
    ReactDOM.unmountComponentAtNode(document.getElementsByClassName(props.parentClass)[0].getElementsByClassName('root')[0]);
  }
