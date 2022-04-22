import React, { useContext } from "react";
import Home from "./pages/Home/Home";
import Watch from "./pages/Watch/Watch";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./authcontext/Authcontext";

const App = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user ? (
               <Home />
              ) : (
                <Routes>
                  <Route path="/register" element={<Register />} />
                </Routes>
              )
            }
          />
          <Route
            path="/register"
            element={
              !user ? (
                <Register />
              ) : (
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              )
            }
          />
          <Route
            path="/login"
            element={
              !user ? (
                <Login />
              ) : (
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              )
            }
          />
          {user && (
            <>
              <Route path="/movies" element={<Home type="movies" />} />
              <Route path="/series" element={<Home type="series" />} />
              <Route path="/watch" element={<Watch />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
