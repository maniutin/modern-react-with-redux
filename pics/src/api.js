import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID EejCWpACRCkjN3sDQhdLmpvbJQagAjdEGh6sA-hm388",
    },
    params: {
      query: term,
    },
  });

  console.log(response.data.results);

  return response;
};

export default searchImages;
