import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function BasicExample(props) {
  const { content } = props;
  return (
  
     

       
        <div  className='subOne'  dangerouslySetInnerHTML={{ __html: content }} />
      
      
     
  
  )
}



export default BasicExample;