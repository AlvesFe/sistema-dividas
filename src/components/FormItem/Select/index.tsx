import { ListProps } from 'libs/ListRepository';
import { Select as SelectInput  } from './styles';

export default function Select() {

  const users : ListProps = {
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
    <SelectInput>
      <option value="0">Selecione</option>
      { users.data && users.data.map((item) => (
        <option value={item.id}>{item.name}</option>
      ))}
    </SelectInput>
  )
}
