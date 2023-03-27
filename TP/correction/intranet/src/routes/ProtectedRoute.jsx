import {  Navigate } from "react-router-dom";


export default ({ children }) => {
    if (false) {
      return <Navigate to="/" />;
    }
    return children;
  };