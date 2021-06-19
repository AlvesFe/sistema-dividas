import { Input as InputField } from './styles'; 

export default function Input({...props}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputField 
      {...props}
    />
  )
}
