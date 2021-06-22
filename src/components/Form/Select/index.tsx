import { DebitContext } from 'context/DebitContext';
import { SelectProps } from 'libs/FormRepository';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Select as SelectInput } from './styles';

export default function Select({ disabled, selected, type, onChange }: SelectProps) {

  const { getUser } = useContext(DebitContext);
  const [data, setData] = useState([] as Array<any>);

  useEffect(() =>{
    const getPropertiesSelect = async () => {
      setData(await getUser());
    }
    getPropertiesSelect();
  })

  return (
    <>
      {type === 'edit' && (
        <SelectInput value={selected} disabled={disabled}>
          <option value="0">Selecione</option>
          {data && data.map((item) => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </SelectInput>
      )}
      {type === 'create' && (
        <SelectInput onChange={onChange} defaultValue={selected} disabled={disabled}>
          <option value="0">Selecione</option>
          {data && data.map((item) => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </SelectInput>
      )}
    </>
    // <></>
  )
}
