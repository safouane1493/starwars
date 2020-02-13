import React from 'react';

function SliderComponent({ images }) {
  return (
    <div className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, index) =>
          <div key={index} className="carousel-item active">
            <img className="d-block w-100" src={require(`../../assets/images/${image}`)} alt="Star wars" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SliderComponent;
