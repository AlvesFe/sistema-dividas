import { ItemProps } from "libs/ListRepository";
import { ItemContainer, ItemName, ItemDate, ItemValue } from "./styles";

interface ListItemProps {
  data: ItemProps;
}

export default function ListItem({ data }: ListItemProps) {
  return (
    <ItemContainer>
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
