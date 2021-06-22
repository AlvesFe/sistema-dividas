import { DebitContextData, DebitProps, DebitProviderProps } from 'libs/DebitRepository';
import { useState, useEffect, createContext } from 'react';
import CreateDebit from 'services/DebiAPI/CreateDebit';
import GetUsers from 'services/JSONPlaceHolder/GetUsers';

export const DebitContext = createContext({} as DebitContextData);

export function DebitProvider({children, ...rest} : DebitProviderProps) {
  const [activeId, setActiveId] = useState(0);
  const [isCreating, setIsCreating] = useState(true);

  const data = [
    {
      id: 1,
      name: "Bruno",
      date: "2017-01-01",
      value: 500.50,
      description: "Cartão de credito vencido"
    },
    {
      id: 2,
      name: "Josue",
      date: "2017-01-01",
      value: 600.50,
      description: "aluguel da casa"
    },
    {
      id: 3,
      name: "Janaina",
      date: "2017-01-01",
      value: 700.65,
      description: "parcela do carro"
    },
    {
      id: 4,
      name: "Jailson",
      date: "2017-01-01",
      value: 900,
      description: "Emprestimo"
    },
  ]



  useEffect(() => {
    activeId !== 0 && console.log(activeId);
  },[activeId])

  const newDebit = () => {
    setActiveId(0);
    toggleCreating(true);
  }

  const createDebit = async(debitInfo: DebitProps) => {
    const request = await CreateDebit(debitInfo);
    console.log(request);
  }

  const changeActiveId = (id:number) => {
    setActiveId(id);
    setIsCreating(false);
  }

  const toggleCreating = (res: boolean) => {
    setIsCreating(res);
  }

  const getUser = async () => {
    const data = await GetUsers();
    return data;
  }

  return (
    <DebitContext.Provider
      value={{
        activeId,
        changeActiveId,
        isCreating,
        toggleCreating,
        newDebit,
        data,
        getUser,
        createDebit
      }}>
        {children}
    </DebitContext.Provider>
  )
}
