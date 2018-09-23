const RequestImage = src => {
  const image = new Image();

  return new Promise((resolve, reject) => {
    image.src = src;
    image.onload = resolve(image);
    image.onerror = reject;
  });
}


export default RequestImage;