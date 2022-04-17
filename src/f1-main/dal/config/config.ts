import axios from "axios";

  export const instance = axios.create({
    baseURL: `https://currency-exchange.p.rapidapi.com/`,
    headers: {
      'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
      'X-RapidAPI-Key': '0c4e59cb79mshefadda79f64d3cap1bdccdjsndff9e39c2d20'
    }
  });

