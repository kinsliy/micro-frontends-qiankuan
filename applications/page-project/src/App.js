import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

function BasicExample(props) {
  const { content, loading ,match} = props;
  console.log(props)
  return (
    <Router>
      <div className='pageProject'>
        <ul className='ul page'>
          {/* <li className='title'>
            下面是子应用2:
          </li> */}
          {/* <li>
            <Link to="/">回到首页</Link>
          </li> */}
          <li>
            <Link to="/topics/index">进入保费试算</Link>
          </li>
          <li>
            <Link to="/topics/about">返回</Link>
          </li>
        </ul>

       

      <div className='page-project-container8'  id='container8'></div>
       <div className='page-project-container7' id='container7'></div>
    
      
       
    
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default BasicExample;