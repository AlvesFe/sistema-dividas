import { FormButtonProps } from "libs/ButtonRepository";
import { FormButton } from "./styles";


export default function Button({title, titleColor = "var(--white)", color = "var(--highlight)", onClick}: FormButtonProps) {
  return (
    <FormButton
      titleColor={titleColor}
      color={color}
      onClick={onClick}
    >
      {title}
    </FormButton>
  )
}
