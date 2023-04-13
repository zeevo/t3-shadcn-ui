import cls from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = [
  "btn",
  "btn-ghost",
  "h-auto",
  "pl-0",
  "pr-0",
  "normal-case",
  "hover:bg-accent",
  "flex",
  "font-semibold",
  "duration-200",
  "min-h-[45px]",
  "min-w-[45px]",
  "items-center",
  "justify-center",
  "bg-transparent",
  "focus:outline-accent",
];

const tooltipStyles = ["tooltip", "tooltip-bottom", "tooltip-accent"].join(" ");

interface IconLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  tooltip?: string;
  active?: boolean;
  href?: string;
}

const IconButton: React.FC<IconLabelProps> = ({
  tooltip,
  active = false,
  children,
  className,
  ...rest
}) => {
  const styles = twMerge(
    cls(buttonStyles, { [tooltipStyles]: tooltip }, { "bg-accent": active }),
    className
  );
  return (
    <label data-tip={tooltip} className={styles} {...rest}>
      {children}
    </label>
  );
};

IconButton.displayName = "IconButton";

export default IconButton;
