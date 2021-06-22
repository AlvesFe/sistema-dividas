export interface ItemProps {
  id: number;
  name: string;
  date: string;
  value: number;
  description: string;
}

export interface ListProps {
  data: Array<ItemProps>;
}