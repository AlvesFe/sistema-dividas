import { AxiosResponse } from "axios";
import { ItemProps } from "./ListRepository";

export interface DebitContextData {
  changeActiveId: (id: string, idUsuario: number, creating?: boolean) => void;
  activeId: number;
  activeStringId: string;
  isCreating: boolean;
  hasUpdated: boolean;
  toggleHasUpdated: (res: boolean) => void;
  toggleCreating: (res: boolean) => void;
  newDebit: () => void;
  getUsers: () => Promise<Array<any>>;
  createDebit: (debitInfo: DebitProps) => void;
  getDebits: () => Promise<Array<any>>;
  getDebit: (id: string) => Promise<any>;
  updateDebit: (debitInfo: DebitProps, id: string) => void;
  deleteDebit: (id: string) => void;
}

export interface DebitProviderProps {
  children: React.ReactNode;
}
export interface DebitProps extends Object {
  criado?: string;
  idUsuario: number;
  motivo: string;
  valor: number;
}