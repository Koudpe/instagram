import React from "react";
import Navigation from "./Navigation";
import Cards from "./Cards";
import Sidebar from "./Sidebar";

import "../styles/App.scss";

const App = () => {
  return (
    <div className='App'>
      <Navigation />
      <main>
        <div className='container'>
          <Cards />
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export default App;
