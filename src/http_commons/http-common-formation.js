import axios from "axios";

export default axios.create({
    baseURL : "http://localhost:8000/formations",
    headers :{
        "Content-type" : "application/json"
    }
});