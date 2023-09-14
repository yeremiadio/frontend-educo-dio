import React, { useEffect } from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

import LandingPage from "./page/landing";
import NotFound from "./page/NotFound"; 
import HalamanLogin from "./page/login";
import Register from './page/register';
import PrivateRoutes from "./utils/PrivateRoutes";

import { ListRoutes } from "./utils/Routes"; 
import { UserProvider } from "./utils/UserContext";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0); //Scroll to top
  }, []);
  return null;
}

const App = () => {
  return (
      <div className="App">
        <UserProvider>
          <Router>
            <ScrollToTop/>
            <Routes>
              <Route element={<PrivateRoutes/>}>
                  {ListRoutes.map((item,index) => {
                    return (
                        <Route key={index} path={item.path} element={item.element}/>
                    );
                  })
                }
                </Route>
              
              <Route path="/" element={<LandingPage />} exact/>
              <Route path="/login" element={<HalamanLogin />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="*" element={<NotFound />}/>
            </Routes>
          </Router>
        </UserProvider>
      </div>
  );
}

export default App;
