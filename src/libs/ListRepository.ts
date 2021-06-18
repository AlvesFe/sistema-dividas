export interface ItemProps {
  id: number;
  name: string;
  date: string;
  value: number;
}

export interface ListProps {
  data: Array<ItemProps>;
}