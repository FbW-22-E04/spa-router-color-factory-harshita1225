import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleColor from "./pages/SingleColor";
import AddColor from "./pages/Addcolor";

function Colors() {
  const [selectColor, setSelectColor] = useState([
    { colorName: "red", colorValue: "#FF0000" },
    { colorName: "green", colorValue: "00FF00" },
    { colorName: "blue", colorValue: "0000FF" },
  ]);
  return (
    <Routes>
      <Route path="/colors" element={<HomePage selectColor={selectColor} />} />
      <Route
        path="/colors/new"
        element={<AddColor selectColor={selectColor} cb={setSelectColor} />}
      />
      <Route
        path="/colors/:colorname"
        element={<SingleColor selectColor={selectColor} cb={setSelectColor} />}
      />
      <Route path="*" element={<HomePage selectColor={selectColor} />} />
    </Routes>
  );
}

export default Colors;
