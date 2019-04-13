import axios from "axios";
const Routes = {
    saveUser: function(data) {
      return axios.post("/api/user", data);
    },
  }
  export default Routes;