export interface ItemProps {
  idUsuario: number;
  _id: string;
  name: string;
  criado: string;
  valor: number;
  description: string;
}

export interface UserProps {
  address: Object;
  company: Object;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export interface ListProps {
  data: Array<ItemProps>;
}