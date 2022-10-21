import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleColor = (props) => {
  const { colorname } = useParams();

  const selectedColor = props.selectColor.filter(
    (el) => el.colorName === colorname
  )[0];
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-center h-screen items-center"
      style={{ backgroundColor: `${selectedColor?.colorValue}` }}
    >
      <div className="text-[3rem] text-center text-white">
        <p>THIS IS {colorname.toUpperCase()}</p>
        <p className="my-[15rem]">ISN'T IT BEAUTIFUL ?</p>
        <p
          className="underline"
          onClick={() => {
            navigate("/colors");
          }}
        >
          GO BACK
        </p>
      </div>
    </div>
  );
};

export default SingleColor;
