import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "ae67720c50f74d19913efd4f12965e7f",
  },
});
