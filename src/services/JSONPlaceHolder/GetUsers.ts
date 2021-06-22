import axios from "axios";
import { apiConfig } from "utils/config";

export default async function GetUsers () {
  const res = await axios.get(apiConfig.json_placeholder+"/users");
  
  return res.data;
}