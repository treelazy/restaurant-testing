import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { indexRouter } from "./routePath";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#364055",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <BrowserRouter>
        <Routes>
          {indexRouter.map(({ path, component: Components }) => (
            <Route key={path} path={path} element={<Components />} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
