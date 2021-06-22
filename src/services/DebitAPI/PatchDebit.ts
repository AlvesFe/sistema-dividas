import axios from "axios";
import { DebitProps } from "libs/DebitRepository";
import { apiConfig } from "utils/config";

export default async function PatchDebit(debitInfo: DebitProps, id: string) {
  try {
    const request = await axios({
      method: 'PATCH',
      url: apiConfig.api_dividas + "/divida/" + id,
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