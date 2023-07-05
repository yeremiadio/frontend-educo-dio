import React from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./page/landing";
import NotFound from "./page/NotFound"; 
import HalamanLogin from "./page/login";
import PrivateRoutes from "./utils/PrivateRoutes";
import { ListRoutes } from "./utils/Routes";


function App() {
  return (
      <div className="App">
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
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
  );
}

export default App;
