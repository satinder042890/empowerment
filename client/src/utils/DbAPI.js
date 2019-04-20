import axios from "axios";
const ApptRoutes = {
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
    },
      logIn: function(data){
        return axios.post("/api/login",data);
      }
};

  export default ApptRoutes;