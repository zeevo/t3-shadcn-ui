import Link from "next/link";
import { type FunctionComponent } from "react";
import cls from "classnames";
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
];

const tooltipStyles = ["tooltip", "tooltip-bottom", "tooltip-accent"].join(" ");

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement & HTMLAnchorElement> {
  tooltip?: string;
  active?: boolean;
  href?: string;
}

const IconButton: FunctionComponent<IconButtonProps> = ({
  tooltip,
  active = false,
  href,
  children,
  className,
  ...rest
}) => {
  const styles = twMerge(
    cls(buttonStyles, { [tooltipStyles]: tooltip }, { "bg-accent": active }),
    className
  );
  if (href) {
    return (
      <Link href={href} data-tip={tooltip} className={styles} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button data-tip={tooltip} className={styles} {...rest}>
      {children}
    </button>
  );
};

export default IconButton;
