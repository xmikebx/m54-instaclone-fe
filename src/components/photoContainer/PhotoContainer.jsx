import React, { useState, useEffect } from "react";
import Photo from "../photo/Photo";
import "./PhotoContainer.css";

const PhotoContainer = () => {
  //   //make state here called users, set to empty array

  const [photos, setPhotos] = useState([]);
  const [sortedPhotos, setSortedPhotos] = useState([]);

  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const getAllPhotos = async () => {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos/?page=2&per_page=24&client_id=tkLP7NvNscpZ5WgpEKKj7xcfUUb2y83L0LxfJBf-Ogc"
        );

        if (!response.ok) {
          throw new Error("Something went wrong...");
        }

        const data = await response.json();

        setPhotos(data);
        // console.log(data);

        const sortedPhotos = await data.map((photo) => {
          return {
            id: photo.id,
            imgUrls: {
              profile_image: photo.user.profile_image.large,
              thumb: photo.urls.thumb,
              small: photo.urls.small,
              regular: photo.urls.regular,
              full: photo.urls.regular,
            },
            username: photo.user.username,
            likes: photo.likes,
            bio: photo.user.bio,
            location: photo.user.location,
          };
        });

        setSortedPhotos(data);
        console.log(sortedPhotos);
      } catch (error) {
        setErrorMsg(error.message);
      }
    };
    getAllPhotos();
  }, []);

  return (
    <div className="photo-container">
      {sortedPhotos.map((item) => {
        return <Photo photo={item} key={item.id} />;
      })}
      <div className="photo-wrapper"></div>
    </div>
  );
};

export default PhotoContainer;
