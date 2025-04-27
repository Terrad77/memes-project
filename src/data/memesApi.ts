export const fetchRandomMeme = async () => {
  try {
    const response = await fetch("https://api.imgflip.com/get_memes");
    if (!response.ok) throw new Error("Error fetching memes");
    const data = await response.json();
    return data.data.memes;
  } catch (error) {
    console.error(error);
    return [{ url: "No-Image-Placeholder.svg" }];
  }
};
