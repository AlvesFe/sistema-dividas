import Button from './Button';
import Select from './Select';
import Input from './Input';
import TextArea from './TextArea';
import { FormContainer, SectionButtons } from './styles';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { DebitContext } from 'context/DebitContext';
import { FormProps } from 'libs/FormRepository';
import { DebitProps } from 'libs/DebitRepository';

export default function Form({type}: FormProps) {
  const { data , activeId } = useContext(DebitContext);
  const [isEditable, setIsEditable] = useState(false);
  const [debit, setDebit] = useState({} as DebitProps);

  useEffect(() => {
    if(type === "edit") toggleEditable(true);
    else toggleEditable(false);
  },[type]);

  const addButtonAction = () => {
    console.log(debit);
  }

  const toggleEditable = (res: boolean) => {
    res ? setIsEditable(true) : setIsEditable(false);
  }

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => { 
    let newData = {...data[activeId-1], value: parseFloat(e.target.value)};
    setDebit(newData);
  }

  const changeDescriptionValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let newData = {...data[activeId-1], description: e.target.value};
    setDebit(newData);
  }

  const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    (e.target.value !== "0" && type === "create") ? toggleEditable(true) : toggleEditable(false);
    const name = e.target[parseInt(e.target.value)].innerHTML;    
    let newDebit = {...debit, id: parseInt(e.target.value), name};
    setDebit(newDebit);
  }

  return (
    <FormContainer>
      <Select
        disabled={activeId !== 0}
        selected={activeId}
        type={type}
        onChange={changeSelect}
      />
      <Input 
        placeholder="Valor" 
        onChange={changeInputValue} 
        defaultValue={activeId !== 0 ? data[activeId - 1].value.toFixed(2) : ""} 
        type="number" 
        disabled={!isEditable}
      />
      <TextArea 
        placeholder="Descrição/Motivo da dívida" 
        onChange={changeDescriptionValue} 
        defaultValue={activeId !== 0 ? data[activeId - 1].description : ""} 
        disabled={!isEditable}
      />

      { type === 'edit' && (
        <SectionButtons>
          <Button
            title="Excluir"
            titleColor="var(--white)"
            onClick={addButtonAction}
            color="var(--secondary)"
          />
          <Button
            title="Salvar"
            titleColor="var(--white)"
            onClick={addButtonAction}
            color="var(--primary)"
          />
        </SectionButtons>
      )}

      { type === 'create' && (
        <SectionButtons>
          <Button
            title="Criar dívida"
            titleColor="var(--white)"
            onClick={addButtonAction}
            color="var(--primary)"
          />
        </SectionButtons>
      )}
    </FormContainer>
  )
}