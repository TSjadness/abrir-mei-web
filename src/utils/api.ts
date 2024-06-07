import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: "http://api.masterix.xyz:3006",
  paramsSerializer: {
    indexes: true,
  },
});

export { api };
