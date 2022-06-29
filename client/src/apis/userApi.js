import axios from "axios";


function userApi(options = {}) {
  const { headers = {} } = options;
  const url =
    process.env.NODE_ENV === "production" ? "/" : "http://localhost:5000";
  return axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });
}
export default userApi;