import axios from "axios";

const URL =
  "https://google-maps28.p.rapidapi.com/maps/api/place/nearbysearch/json";

const options = {
  params: {
    location: "",
    radius: "200000",
    language: "en",
    keyword: "restaurant",
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

export const getPlacesData = async (lat, lng) => {
  try {
    //request
    options.params.location = `${lat}, ${lng}`;
    const { data } = await axios.get(URL, options);
    //destructuring, made a variable called data {data: myData} make a variable called myData.
    //Study promise -> async-await -> try-catch : error handling
    //Async -> set time out
    // Don't know how long it will take, unlike setTimeout. SO we use promise.
    // const callApi = new Promise((resolve, reject) => code that takes long time.)
    // .then and .catch
    return data;
  } catch (error) {
    console.error(error);
  }
};
