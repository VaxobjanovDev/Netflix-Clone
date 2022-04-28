import React, { useContext } from "react";
import Home from "./pages/Home/Home";
import Watch from "./pages/Watch/Watch";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./authcontext/Authcontext";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Router>
        <Routes>
          {user ? (
            <Route path="/" element={<Home />} />
          ) : (
              <Route path="/" element={<Navigate replace to="/register"/>} />
          )}
          <Route path="/register">
          {!user ? (
               <Route index element={<Register />}/>
              ) : (
              <Route path="/register" element={<Navigate replace to="/"/>} />
              )}
          </Route>
          <Route path="/login">
          {!user ? (
               <Route index element={<Login />}/>
              ) : (
              <Route path="/login" element={<Navigate replace to="/"/>} />
              )}
          </Route>
          {user && (
            <>
              <Route path="/movies" element={<Home type="movie" />} />
              <Route path="/series" element={<Home type="series" />} />
              <Route path="/watch" element={<Watch />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
};

export default App;
