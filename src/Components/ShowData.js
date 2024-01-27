import React from "react";

const ShowData = ({ apiData, setSelected }) => {
  return (
    <div className="card-container">
      {apiData &&
        apiData.map((item, index) => {
          return (
            <div
              onClick={() => setSelected(item)}
              className="card"
              key={item.kind + index}
            >
              <div>
                {item.volumeInfo.imageLinks.thumbnail && (
                  <img src={item.volumeInfo.imageLinks.thumbnail} alt="" />
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ShowData;
