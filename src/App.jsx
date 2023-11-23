import React from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <div>
        <div>
          <Header />
          <Main />
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default App;
