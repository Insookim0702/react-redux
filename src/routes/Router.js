import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home.tsx";
import Detail from "./Detail.tsx";
const ComponentRouter = () => {
  return (
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </Routes>
  );
};
export default ComponentRouter;
