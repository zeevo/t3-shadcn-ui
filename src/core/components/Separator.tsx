import * as Separator from "@radix-ui/react-separator";
import type { ComponentProps, PropsWithChildren } from "react";
import cls from "classnames";

const StyledSeparator: React.FC<
  PropsWithChildren<
    { className?: string } & ComponentProps<typeof Separator.Root>
  >
> = ({ children, orientation, className, ...props }) => {
  let baseStyles;

  if (orientation === "vertical") {
    baseStyles = "mr-3.5 ml-3.5 h-3.5 w-px";
  } else {
    baseStyles = "w-full mr-2 ml-2 mt-4 mb-4  h-px";
  }

  return (
    <div className="flex justify-center">
      <Separator.Root
        {...props}
        className={cls(
          className,
          baseStyles,
          "bg-subtext-light dark:bg-subtext-dark"
        )}
      >
        {children}
      </Separator.Root>
    </div>
  );
};

export default StyledSeparator;
