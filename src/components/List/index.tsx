import { ListProps } from "libs/ListRepository";
import ListItem from './ListItem'

export default function List() {

  const teste : ListProps = {
    data:[
      {
        id: 1,
        name: "Jonas",
        date: "2017-01-01",
        value: 500.50

      },
      {
        id: 2,
        name: "Josue",
        date: "2017-01-01",
        value: 600.55
      },
      {
        id: 3,
        name: "Janaina",
        date: "2017-01-01",
        value: 700.65
      },
      {
        id: 4,
        name: "Jailson",
        date: "2017-01-01",
        value: 900
      },
    ]
  }

  return (
    <>
      { teste.data && teste.data.map((item) => (
        <ListItem key={item.id} data={item} />
      ))}
    </>
  )
}
