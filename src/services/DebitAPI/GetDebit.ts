import axios from "axios";
import { apiConfig } from "utils/config";

export default async function GetDebit(id: string) {
  
  const request = await axios({
    method: "GET",
    url: apiConfig.api_dividas + "divida/" + id,
    params: {
      uuid: apiConfig.uuid
    }
  })  

  return request.data.result;
}