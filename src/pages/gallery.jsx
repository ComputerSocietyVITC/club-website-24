import React from 'react';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../data/images', false, /\.(png|jpe?g|svg)$/));

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <div className="w-full max-w-6xl p-4">
        <div className="grid grid-cols-4 gap-4">
          {/* Main Image */}
          <div className="col-span-1 flex justify-center items-center">
            <img
              src={images[0]}
              alt="Main"
              className="w-11/12 h-auto rounded-lg object-cover"
            />
          </div>
          {/* Grid of Images */}
          <div className="col-span-3 ml-10 grid grid-cols-4 gap-1">
            {images.slice(1, 9).map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-auto rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
