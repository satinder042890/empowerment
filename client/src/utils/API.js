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
//add getAppts
//add getAppt
//add createAppt
//add deleteAppt

// import axios from "axios";

// export default {
  // Gets all books
  // getAppts: function() {
  //   return axios.get("/api/scheduler");
  // },
  // Gets the book with the given id
  // getAppt: function(id) {
  //   return axios.get("/api/scheduler/" + id);
  // },
  // Deletes the book with the given id
  // deleteAppt: function(id) {
  //   return axios.delete("/api/scheduler/" + id);
  // },
  // Saves a book to the database
//   saveAppt: function(bookData) {
//     return axios.post("/api/scheduler", apptData);
//   }
// };

  export default Videos;

