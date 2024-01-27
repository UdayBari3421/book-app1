import React from "react";

const RenderSelected = ({ selected }) => {
  return (
    selected && (
      <div className="box">
        <div className="left">
          {selected.volumeInfo.imageLinks.thumbnail && (
            <img src={selected.volumeInfo.imageLinks.thumbnail} alt="" />
          )}
        </div>
        <div className="right">
          {selected.volumeInfo.title && (
            <h2>Title: {selected.volumeInfo.title}</h2>
          )}
          {selected.volumeInfo.description && (
            <h3>Desc: {selected.volumeInfo.description}</h3>
          )}
          {selected.volumeInfo.publisher && (
            <p>Publisher: {selected.volumeInfo.publisher}</p>
          )}
          {selected.volumeInfo.language && (
            <p>Lang: {selected.volumeInfo.language}</p>
          )}
          {selected.volumeInfo.averageRating && (
            <p>Avg Count: {selected.volumeInfo.averageRating}</p>
          )}
          {selected.volumeInfo.ratingsCount && (
            <p>Rating Count: {selected.volumeInfo.ratingsCount}</p>
          )}
        </div>
      </div>
    )
  );
};
export default RenderSelected;
