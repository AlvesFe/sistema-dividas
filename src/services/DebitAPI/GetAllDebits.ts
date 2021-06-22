import axios from "axios";
import { apiConfig } from "utils/config";

export default async function GetAllDebits() {
  const request = axios({
    method: "GET",
    url: apiConfig.api_dividas + "divida/",
    params: {
      uuid: apiConfig.uuid
    }
  })

  return (await request).data.result;
}