import Button from './Button';
import Select from './Select';
import Input from './Input';
import TextArea from './TextArea';
import { FormContainer, SectionButtons } from './styles';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { DebitContext } from 'context/DebitContext';
import { FormProps } from 'libs/FormRepository';
import { DebitProps } from 'libs/DebitRepository';

export default function Form({ type }: FormProps) {
  const { activeStringId, activeId, createDebit, getDebit, getUsers, updateDebit, deleteDebit, changeActiveId } = useContext(DebitContext);
  const [isEditable, setIsEditable] = useState(false);
  const [debit, setDebit] = useState({idUsuario:0, valor:0, motivo:""} as DebitProps);
  const [data, setData] = useState([] as Array<any>);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (type === "edit") toggleEditable(true);
    else toggleEditable(false);
  }, [type]);

  useEffect(() => {
    const GetDataProps = async () => {
      type === "edit" && setDebit(await getDebit(activeStringId));
    }
    GetDataProps();
    setLoading(false);
  },[getDebit, activeStringId, type])

  useEffect(() => {
    const getPropertiesSelect = async () => {
      setData(await getUsers());
    }
    getPropertiesSelect();
  })

  useEffect(() => {
    console.log("Debit: ",debit)
  },[debit])

  const toggleEditable = (res: boolean) => {
    res ? setIsEditable(true) : setIsEditable(false);
  }

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    let newData = { ...debit, valor: parseFloat(e.target.value) };
    setDebit(newData);
  }

  const changeDescriptionValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let newData = { ...debit, motivo: e.target.value };
    setDebit(newData);
  }

  const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    (e.target.value !== "0" && type === "create") ? toggleEditable(true) : toggleEditable(false);
    const name = e.target[parseInt(e.target.value)].innerHTML;
    let newDebit = {...debit, idUsuario: parseInt(e.target.value), name};
    setDebit(newDebit);
  }

  const handleCreateDebit = () => {
    createDebit(debit);
  }  

  const handlePatchDebit = () => {
    updateDebit(debit, activeStringId);
  }

  const handleDeleteDebit = () => {
    deleteDebit(activeStringId);
    changeActiveId("",0, true);
    setDebit({idUsuario:0, valor:0, motivo:""});
  }
  
  return (
    <>
      {((debit.hasOwnProperty('_id') || type === "create") && !loading) && (
        <FormContainer>
          <Select
            disabled={activeId !== 0}
            selected={debit.idUsuario}
            data={data}
            onChange={changeSelect}
          />
          <Input
            placeholder="Valor"
            onChange={changeInputValue}
            value={debit.valor}
            type="number"
            disabled={!isEditable}
          />
          <TextArea
            placeholder="Descrição/Motivo da dívida"
            onChange={changeDescriptionValue}
            value={debit.motivo}
            disabled={!isEditable}
          />

          {type === 'edit' && (
            <SectionButtons>
              <Button
                title="Excluir"
                titleColor="var(--white)"
                onClick={isEditable ? handleDeleteDebit : () => null}
                color="var(--secondary)"
                disabled={!isEditable}
              />
              <Button
                title="Salvar"
                titleColor="var(--white)"
                onClick={isEditable ? handlePatchDebit : () => null}
                color="var(--primary)"
                disabled={!isEditable}
              />
            </SectionButtons>
          )}

          {type === 'create' && (
            <SectionButtons>
              <Button
                title="Criar dívida"
                titleColor="var(--white)"
                onClick={isEditable ? handleCreateDebit : () => null}
                color="var(--primary)"
                disabled={!isEditable}
              />
            </SectionButtons>
          )}
        </FormContainer>
      )}
    </>
  )
}