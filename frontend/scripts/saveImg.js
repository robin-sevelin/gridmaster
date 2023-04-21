import { fetchImages, renderImages } from "./showimgs";

export const saveImagePost = async (image) => {
  const response = await fetch("http://localhost:3000/image/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(image),
  });
  const data = await response.json();
  console.log(data);
  viewSavedImages();
};

// view saved images
export const viewSavedImages = async () => {
  const images = await fetchImages();
  renderImages(images);
};
