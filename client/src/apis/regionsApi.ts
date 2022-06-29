import axios from "axios";

// const URL =
//     process.env.NODE_ENV === "production"
//         ? "https://shirtol-bank-api-mongoose.herokuapp.com/"
//         : "http://localhost:5000";


const URL =
process.env.NODE_ENV === "production" ? "/regions" : "http://localhost:5000/regions";

export default axios.create({
    baseURL: URL,
});
