import { DebitContext } from "context/DebitContext";
import { ItemProps, UserProps } from "libs/ListRepository";
import { useContext } from "react";
import { ItemContainer, ItemName, ItemDate, ItemValue } from "./styles";

interface ListItemProps {
  data: ItemProps;
  user: UserProps;
}

export default function ListItem({ data, user }: ListItemProps) {
  const { changeActiveId } = useContext(DebitContext);

  const handleClick = (id: string, idUsuario: number)=>{
    changeActiveId(id, idUsuario);
  } 

  const addZero = (num: number) => {
    if (num <= 9) 
        return "0" + num;
    else
        return num; 
  }
  
  const Criado = new Date(data.criado);
  const CriadoFormatted = (addZero(Criado.getDate())) + "/" + (addZero(Criado.getMonth() + 1) + "/" + Criado.getFullYear());

  return (
    <>
      { (user && data) && (
        <ItemContainer onClick={() => handleClick(data._id, data.idUsuario)} >
        <div>
          <ItemName>
            {user.name}
          </ItemName>
          <ItemDate>
            {
              CriadoFormatted
            }
          </ItemDate>
        </div>
        <ItemValue>
          R$ {data.valor.toFixed(2)}
        </ItemValue>
        </ItemContainer>
      )}
    </>
    // <></>
  )
}
