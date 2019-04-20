import axios from "axios";
const Key = "af9e390fa49bdb87da27e7c9d3a127dc"
const URL = 'https://api.betterdoctor.com/2016-03-01/doctors?user_key=' + Key;

const getDoctors = (specialty, statezip, first, last) => {
  const spec = URL + "&specialty_uid="+ specialty + "&location=" + statezip +
   (first? "&first_name=" + first:"") + (last? "&last_name=" + last:"");
console.log(spec)
  return axios.get(spec); 
};

export default getDoctors;
 