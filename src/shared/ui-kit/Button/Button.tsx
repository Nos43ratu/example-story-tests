import { FC } from "react";
import { ButtonPropsType, ButtonSize, ButtonVariant } from "./ButtonTypes";
import clsx from "clsx";

export const Button: FC<ButtonPropsType> = ({
  className = "",
  size = ButtonSize.L,
  variant = ButtonVariant.PRIMARY,
  rounded = true,
  type = "submit",
  disabled = false,
  onClick = () => {},
  onFocus = () => {},
  onBlur = () => {},
  children,
}) => {
  return (
    <button
      className={clsx(
        className,
        "bg-black p-3",
        { "w-full p-5": size === ButtonSize.L },
        { "w-max p-3": size === ButtonSize.M },
        { "w-max p-1": size === ButtonSize.S },
        { "rounded-xl": rounded },
        { "bg-primary": variant === ButtonVariant.PRIMARY },
        { "bg-white-200": variant === ButtonVariant.SECONDARY }
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      {children}
    </button>
  );
};

export default Button;
