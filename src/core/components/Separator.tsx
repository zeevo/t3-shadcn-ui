import * as Separator from "@radix-ui/react-separator";
import type { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const StyledSeparator: React.FC<
  PropsWithChildren<
    { className?: string } & ComponentProps<typeof Separator.Root>
  >
> = ({ children, orientation, className, ...props }) => {
  let baseStyles;

  if (orientation === "vertical") {
    baseStyles = "h-full w-px";
  } else {
    baseStyles = "w-full h-px";
  }

  return (
    <div className={"flex flex-col justify-center"}>
      <Separator.Root
        {...props}
        className={twMerge(baseStyles, "bg-base-content transition", className)}
      >
        {children}
      </Separator.Root>
    </div>
  );
};

export default StyledSeparator;
