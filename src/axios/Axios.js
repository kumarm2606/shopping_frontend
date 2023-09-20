import axios from "axios";
const Token= localStorage.getItem('userData') ;
const Axios = axios.create({
    baseURL: 'http://localhost:4000/api/',
    headers: {
token:Token
    },
  });
  
  export default Axios;