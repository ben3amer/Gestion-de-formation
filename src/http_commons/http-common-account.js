import axios from "axios";

export default axios.create({
    baseURL : "http://localhost:8000/users/me",
    headers :{
        "Content-type" : "application/json"
    }
});