import * as axios from "axios";
import { ReplaySubject } from "rxjs";
const ApptRoutes = {
    saveUser: function(data) {
      return axios.post("/api/user", data);
    },
    saveAppt: function(id,data) {
      return axios.post("/api/scheduler/"+id, data)
    },
    getAppt: function(id) {
      return axios.get("/api/scheduler/"+id)
    },
    getAppts: function(id) {
      return axios.get("/api/scheduler/"+id)
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
    updateContact: function(id,data){
      return axios.post("/api/updateContact/"+id , data);
    },
    getContact: function(id){
      return axios.get("/api/contact/"+id);
    },
    sendText: function(number,message){
      return axios.get("/api/contact/"+number+"/"+message)
    }
};

  export default ApptRoutes;