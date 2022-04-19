import { ButtonHTMLAttributes, ReactNode } from "react";

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export enum ButtonSize {
  S = "s",
  M = "m",
  L = "l",
}

export enum ButtonVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface ButtonPropsType {
  className?: string;
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  rounded?: boolean;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: NativeButtonProps["onClick"];
  onFocus?: NativeButtonProps["onFocus"];
  onBlur?: NativeButtonProps["onBlur"];
}
