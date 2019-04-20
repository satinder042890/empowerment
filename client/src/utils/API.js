import axios from "axios";
const key = "AIzaSyDa1T6i-oZRysekxLrAGqbpH5kuJvYAkdk";
const URL = "https://www.googleapis.com/youtube/v3/";


const Videos= axios.create({
  baseURL:URL,
  params:{
    part: 'snippet',
      key: key,
      maxResults: 10
  }
})

  export default Videos;

