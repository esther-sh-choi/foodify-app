import axios from "axios";

const URL =
  "https://google-maps28.p.rapidapi.com/maps/api/place/nearbysearch/json";

const options = {
  params: {
    location: "38.8976763,-77.0365298",
    radius: "200000",
    language: "en",
    type: "restaurant",
  },
  headers: {
    "X-RapidAPI-Key": "1295dcec3bmsh893dd8768e7eea9p1f8553jsn76ccfea01960",
    "X-RapidAPI-Host": "google-maps28.p.rapidapi.com",
  },
};

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

export const getPlacesData = async () => {
  try {
    //request
    const { data } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.error(error);
  }
};
