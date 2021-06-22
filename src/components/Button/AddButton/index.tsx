import { AddButtonProps } from "libs/ButtonRepository";
import { Button, PlusIcon } from "./styles";


export default function AddButton({ onClick, title }:AddButtonProps) {
  return (
    <Button onClick={onClick} >
      <PlusIcon />
      <div>{title}</div>
    </Button>
  )
}
