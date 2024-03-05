import "./Photo.css";
import { useState } from "react";
import PhotoContainer from "../photoContainer/PhotoContainer";
import { FaHeart } from "react-icons/fa";

const Photo = ({ photo }) => {
  console.log({ photo });
  return (
    <>
      <div className="photoCard" key={photo.id}>
        <img className="photoCardImg" src={photo.urls.regular} alt="image" />
        <a className="photoLikes noto-sans-bold white">
          <FaHeart />
          {photo.likes}
        </a>
      </div>
    </>
  );
};

export default Photo;
