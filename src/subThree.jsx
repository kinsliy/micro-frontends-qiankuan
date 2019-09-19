import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function BasicExample(props) {
  const { content } = props;
  return (
  
     

  
      
        <div className='subThree'  id='root1000'   dangerouslySetInnerHTML={{ __html: content }} />
  
  
  )
}



export default BasicExample;