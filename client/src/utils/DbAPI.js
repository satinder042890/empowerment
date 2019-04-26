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
      },
    
    getAddress:function(lat,lng){
      return axios.get("https://www.mapquestapi.com/geocoding/v1/reverse?key=q2FSkaUbOEbb3VN3ZAz4kqoXld16WfOR&location="+lat+"%2C"+lng+"&outFormat=json&thumbMaps=false")
    },

    saveContact: function(id,data){
      return axios.post("/api/contact/"+id , data);
    },
    getContact: function(id){
      return axios.get("/api/contact/"+id);
    }
};

  export default ApptRoutes;