import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './App.css'
function BasicExample(props) {
  const { content, loading } = props;
  return (
    <Router>
      <div className='main-project'>
        <div className='title'>下面是主应用：</div>
        <ol className='ul'>
          <li>
            <Link to="/home">首页</Link>
          </li>
          <li>
            <Link to="/topics">用户信息</Link>
          </li>
        </ol>

       

    
       <div className='main-project-container3'  id='container4'></div>
       <div className='main-project-container4'  id='container3'></div>
      
       
    
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