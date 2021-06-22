interface ButtonProps{
  onClick: () => void;
  title: string;
}

export interface AddButtonProps extends ButtonProps {}

export interface FormButtonProps extends ButtonProps {
  titleColor?: string;
  color?: string;
  disabled?: boolean;
}

export type FormButtonStyleProps = Omit<FormButtonProps, "title" | "onClick" >;