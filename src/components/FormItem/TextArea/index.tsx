import { TextareaHTMLAttributes } from "react";
import { TArea } from "./styles";

export default function TextArea({...props}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <TArea 
      {...props} 
    />
  )
}
 

