//import { ItemProps } from "./ListRepository";

import { ChangeEvent } from "react";

export interface FormProps {
  type?: "create" | "edit";
}

export interface SelectProps extends FormProps{
  disabled: boolean;
  selected: number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}