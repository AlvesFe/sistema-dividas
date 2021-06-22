import { AxiosResponse } from "axios";
import { ItemProps } from "./ListRepository";

export interface DebitContextData {
  changeActiveId: (id: number) => void;
  activeId: number;
  data: Array<ItemProps>;
  isCreating: boolean;
  toggleCreating: (res: boolean) => void;
  newDebit: () => void;
  getUser: () => Promise<Array<any>>;
  createDebit: (debitInfo: DebitProps) => void;
}

export interface DebitProviderProps {
  children: React.ReactNode;
}
export interface DebitProps extends Object {
  id: number;
  name: string;
  value: number;
  description: string;
  date?: string;
}