import axios from "axios"

const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {maxResults:'50'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };



  export const fetchFromAPI = async (url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`,{
      params: {maxResults:'50'},
    headers: {
      'X-RapidAPI-Key':'d09a5f735fmsh7026934bdc55aaap1e4d5ajsnc07ca80145e3',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
    });
    return data;
  }
