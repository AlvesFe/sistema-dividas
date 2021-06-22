import axios from "axios";
import { DebitProps } from "libs/DebitRepository";
import { apiConfig } from "utils/config";

export default async function CreateDebit(debitInfo: DebitProps) {
  const request = await axios({
    method: 'POST',
    url: apiConfig.api_dividas + "/divida/",
    params: {
      uuid: apiConfig.uuid
    },
    data:{
      idUsuario: debitInfo.id,
      motivo: debitInfo.description,
      valor: debitInfo.value
    }
  });

  return request;
} 