import Alert from 'components/Alert';
import { DebitContextData, DebitProps, DebitProviderProps } from 'libs/DebitRepository';
import { useState, useEffect, createContext } from 'react';
import CreateDebit from 'services/DebitAPI/CreateDebit';
import DeleteDebit from 'services/DebitAPI/DeleteDebit';
import GetAllDebits from 'services/DebitAPI/GetAllDebits';
import GetDebit from 'services/DebitAPI/GetDebit';
import PatchDebit from 'services/DebitAPI/PatchDebit';
import GetUsers from 'services/JSONPlaceHolder/GetUsers';

export const DebitContext = createContext({} as DebitContextData);

export function DebitProvider({ children, ...rest }: DebitProviderProps) {
  const [activeId, setActiveId] = useState(0);
  const [isCreating, setIsCreating] = useState(true);
  const [activeStringId, setActiveStringId] = useState("");
  const [hasUpdated, setHasUpdated] = useState(true);

  useEffect(() => {
    activeId && console.log(activeId);
  }, [activeId])

  const newDebit = () => {
    setActiveId(0);
    toggleCreating(true);
  }

  const createDebit = async (debitInfo: DebitProps) => {

    const itFailed = validateFields(debitInfo);

    const request = await CreateDebit(debitInfo);

    if (!itFailed && request.status === 200) {
      Alert({
        type: "success",
        title: "Sucesso!",
        text: "Sucesso ao criar dívida!"
      })
      toggleHasUpdated(true);
    }
    else {
      Alert({
        type: "error",
        title: "Erro",
        text: "Erro ao criar dívida!"
      });
    }

  }

  const validateFields = (debitInfo: DebitProps) => {
    let itFailed = false;
    if (debitInfo.idUsuario === 0) itFailed = true;
    if (debitInfo.valor === 0) itFailed = true;
    if (debitInfo.motivo === "") itFailed = true;

    return itFailed;
  }

  const getDebit = async (id: string) => {
    return await GetDebit(id);
  }

  const getDebits = async () => {
    return await GetAllDebits();
  }

  const toggleHasUpdated = (res: boolean) => {
    setHasUpdated(res);
  }

  const changeActiveId = async (id: string, idUsuario: number, creating: boolean = false) => {
    setActiveId(idUsuario);
    setActiveStringId(id);
    setIsCreating(creating);
  }

  const toggleCreating = (res: boolean) => {
    setIsCreating(res);
  }

  const getUsers = async () => {
    return await GetUsers();
  }

  const updateDebit = async (debitInfo: DebitProps, id: string) => {
    const itFailed = validateFields(debitInfo);

    const request = await PatchDebit(debitInfo, id);

    if (!itFailed && request.status === 200) {
      Alert({
        type: "success",
        title: "Sucesso!",
        text: "Sucesso ao atualizar dívida!"
      })
      toggleHasUpdated(true);
    }
    else {
      Alert({
        type: "error",
        title: "Erro",
        text: "Erro ao atualizar dívida!"
      });
    }
  }

  const deleteDebit = async (id: string) => {
    const request = await DeleteDebit(id);

    if (request.ok === 1) {
      Alert({
        type: "success",
        title: "Sucesso!",
        text: "Sucesso ao remover dívida!"
      })
      toggleHasUpdated(true);
    }
    else {
      Alert({
        type: "error",
        title: "Erro",
        text: "Erro ao remover dívida!"
      });
    }
  }

  return (
    <DebitContext.Provider
      value={{
        activeId,
        activeStringId,
        changeActiveId,
        isCreating,
        hasUpdated,
        toggleHasUpdated,
        toggleCreating,
        newDebit,
        getUsers,
        createDebit,
        getDebits,
        getDebit,
        updateDebit,
        deleteDebit
      }}>
      {children}
    </DebitContext.Provider>
  )
}
