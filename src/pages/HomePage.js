import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = ({ selectColor }) => {
  console.log(selectColor);
  return (
    <div>
      <div className="bg-black h-[15rem] text-white flex-col  flex justify-center items-center gap-[1rem]">
        <h3 className="text-[2rem]">Welcome to the color factory</h3>
        <Link to="/colors/new">
          <h2 className="text-[2.5rem] border-b-2 ">Add a color</h2>
        </Link>
      </div>
      <div className="flex-col flex justify-center items-center gap-[1rem] my-5">
        <p>Please select a color:</p>
        {selectColor.map((item, i) => {
          return (
            <Link to={`/colors/${item.colorName}`} key={i}>
              <p className="underline">{item.colorName}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
