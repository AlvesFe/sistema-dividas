import { DebitContext } from "context/DebitContext";
import { ItemProps } from "libs/ListRepository";
import { useContext } from "react";
import { ItemContainer, ItemName, ItemDate, ItemValue } from "./styles";

interface ListItemProps {
  data: ItemProps;
}

export default function ListItem({ data }: ListItemProps) {
  const { changeActiveId } = useContext(DebitContext);

  const handleClick = (id: number)=>{
    changeActiveId(id);
  } 

  return (
    <ItemContainer onClick={() => handleClick(data.id)} >
      <div>
        <ItemName>
          {data.name}
        </ItemName>
        <ItemDate>
          {data.date}
        </ItemDate>
      </div>
      <ItemValue>
        R$ {data.value.toFixed(2)}
      </ItemValue>
    </ItemContainer>
  )
}
