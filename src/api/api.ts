import axios from "axios";

const request = axios.create({
    baseURL:'https://medlink-apiv2.ecomedic.vn/api/',
  
})

export default request;