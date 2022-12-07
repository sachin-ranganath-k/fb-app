import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "../components/Loader";
// import Home from "../components/Home";
import NavBar from "../components/NavBar";
import Photos from "../components/Photos";
import UseRef from "../components/UseRef";
import ClickCounter from "../counterHOC/CounterHoc";

const Home = lazy(() => import("../components/Home"));

const RouteLinks = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<UseRef />} />
        <Route
          exact
          path="/"
          element={
            <React.Suspense fallback={<div><Loader /></div>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </Router>
  );
};

export default RouteLinks;
