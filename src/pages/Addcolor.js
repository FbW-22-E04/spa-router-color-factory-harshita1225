import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addcolor = ({ selectColor, cb }) => {
  const [data, setData] = useState({ colorName: "", colorValue: "" });
  console.log(selectColor, cb);

  const navigate = useNavigate();

  const colorHandler = (e) => {
    e.preventDefault();

    cb([...selectColor, data]);
    // console.log(selectColor);
    // console.log(data);
    navigate("/colors");
  };

  return (
    <div className="bg-green-400 h-screen flex justify-center items-center">
      <div className="bg-white w-[80%] p-[6rem] rounded-[15px]">
        <form onSubmit={colorHandler}>
          <div>
            <label htmlFor="colorname">Color Name</label>
            <input
              onChange={(e) => setData({ ...data, colorName: e.target.value })}
              value={data.colorName}
              placeholder="Enter a name of color"
              className="border-2 border-gray-500"
              type="text"
              id="colorname"
            />
          </div>
          <div className="my-5">
            <label htmlFor="type">Color Value</label>
            <input
              value={data.colorValue}
              onChange={(e) => setData({ ...data, colorValue: e.target.value })}
              className="border-2 border-gray-500"
              type="color"
              id="type"
            />
          </div>
          <button className="border-2 bg-blue-200">Add this color</button>
        </form>
      </div>
    </div>
  );
};

export default Addcolor;
