import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchphotos } from "./photosSlice";

const PhotosView = () => {
  const { isLoading, photos, error } = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchphotos());
  }, []);

  return (
    <div>
      {isLoading && <h4>Loading....</h4>}
      {error && <h4>{error}</h4>}
      {photos.map((photo) => {
        return <img key={photo.id} src={photo.url}></img>;
      })}
    </div>
  );
};

export default PhotosView;
