import { SelectProps } from 'libs/FormRepository';
import { Select as SelectInput } from './styles';

export default function Select({ disabled, selected, data, onChange }: SelectProps) {

  return (
    <SelectInput onChange={onChange} value={selected} disabled={disabled}>
      <option value="0">Selecione</option>
      {data && data.map((item) => (
        <option key={item.id} value={item.id}>{item.name}</option>
      ))}
    </SelectInput>
  )
}
