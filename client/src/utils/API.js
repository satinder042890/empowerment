import axios from "axios";
const key = "AIzaSyDa1T6i-oZRysekxLrAGqbpH5kuJvYAkdk";
const URL = "https://www.googleapis.com/youtube/v3/";


export default axios.create({
  baseURL:URL,
  params:{
    part: 'snippet',
      key: key,
      maxResults: 10
  }
})
//  {
//   searchVideos: function (query) {
//     var options = {
//       part: 'snippet',
//       key: key,
//       maxResults: 10,
//       q: query
//     };
//     axios.get(URL, options, function (data) {
//       console.log(data);
//       console.log("hello");
//       return (data);
//     });
//   }
// };
