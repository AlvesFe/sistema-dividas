import { ListProps } from "libs/ListRepository";
import ListItem from './ListItem'
import { ListContainer } from "./styles";

export default function List(props: ListProps) {

  const { data } : ListProps = props;

  return (
    <ListContainer>
      { data && data.map((item) => (
        <ListItem key={item.id} data={item} />
      ))}
    </ListContainer>
    // <></>
  )
}
