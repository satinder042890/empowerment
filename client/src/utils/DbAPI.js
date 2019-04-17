import axios from "axios";
const Routes = {
    saveUser: function(data) {
      return axios.post("/api/user", data);
    },
    saveAppt: function(data) {
      return axios.post("/api/scheduler", data)
    },
    getAppts: function() {
      return axios.get("/api/scheduler")
    },
    deleteAppt: function(id) {
      return axios.delete("/api/scheduler/" + id)
    }
  }
  export default Routes;