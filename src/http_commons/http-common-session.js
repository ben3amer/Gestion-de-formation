import axios from "axios";

export default axios.create({
    baseURL : "http://localhost:8000/session",
    headers :{
        "Content-type" : "application/json"
    }
});