import axios from "axios";
import { DebitProps } from "libs/DebitRepository";
import { apiConfig } from "utils/config";

export default async function CreateDebit(debitInfo: DebitProps) {
  try {
    const request = await axios({
      method: 'POST',
      url: apiConfig.api_dividas + "/divida/",
      params: {
        uuid: apiConfig.uuid
      },
      data: {
        idUsuario: debitInfo.idUsuario,
        motivo: debitInfo.motivo,
        valor: debitInfo.valor
      }
    });
    return request;
  }
  catch(err){
    return err;
  }
  
}