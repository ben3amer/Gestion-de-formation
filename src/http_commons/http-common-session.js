import axios from "axios";

export default axios.create({
    baseURL : "http://localhost:8000/sessions",
    headers :{
        "Content-type" : "application/json"
    }
});