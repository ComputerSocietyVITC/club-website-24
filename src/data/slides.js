// slides.js
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('./images', false, /\.(heic|jpg|jpeg|png)$/));
  
  export const slides = Object.keys(images).map((key, index) => ({
    id: index + 1,
    src: images[key], // Ensure this points to the correct path
    width: 534, // Adjust width as needed
    height: 420.97 // Adjust height as needed
  }));
  