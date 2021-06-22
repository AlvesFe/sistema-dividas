import axios from "axios";
import { apiConfig } from "utils/config";

export default async function DeleteDebit(id: string) {
  
  try {
    const request = await axios({
      method: "DELETE",
      url: apiConfig.api_dividas + "divida/" + id,
      params: {
        uuid: apiConfig.uuid
      }
    })  
    return request.data.result;

  } catch (err) {
    return err;
  }
}