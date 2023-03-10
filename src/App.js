import React from "react";
// import { Route, Routes } from "react-router";
import Contact from "./pages/contact";
import Camera from "./Camera";

const App = () => {
    return (
      <>
       
          <Contact/>
          <Camera/>
          {/* <Route path="/service" component={Service}></Route> */}
          {/* <Route component={Error}></Route> */}
        
      </>
    );
  };
  
export default App;