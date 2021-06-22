import { DebitContext } from "context/DebitContext";
import { useEffect } from "react";
import { useContext, useState } from "react";
import ListItem from './ListItem'
import { ListContainer } from "./styles";

export default function List() {
  const { getDebits, getUsers, hasUpdated, toggleHasUpdated } = useContext(DebitContext);
  const [data, setData] = useState([] as Array<any>);
  const [users, setUsers] = useState([] as Array<any>);

  useEffect(() => {
    const getPropertiesSelect = async () => {
      setData(await getDebits());
    }
    if (hasUpdated) {
      getPropertiesSelect();
      toggleHasUpdated(false);
    }
  },[getDebits, hasUpdated, toggleHasUpdated]);  

  useEffect(() => {
    const getPropertiesSelect = async () => {
      setUsers(await getUsers());
    }
    getPropertiesSelect();
  },[getUsers]);

  return (
    <ListContainer>
      {data && data.map((item) => (
        <ListItem key={item._id} data={item} user={users[item.idUsuario-1]} />
      ))}
    </ListContainer>
    // <></>
  )
}
