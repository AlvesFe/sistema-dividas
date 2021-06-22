import { ItemProps } from "./ListRepository";

export interface DebitContextData {
  changeActiveId: (id: number) => void;
  activeId: number;
  data: Array<ItemProps>;
  isCreating: boolean;
  toggleCreating: (res: boolean) => void;
  newDebit: () => void;
  getUser: () => Promise<Array<any>>
}

export interface DebitProviderProps {
  children: React.ReactNode;
}

export interface DebitProps {
  id: number;
  name: string;
  value: number;
  description: string;
  date?: string;
}