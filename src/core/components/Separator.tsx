import * as Separator from "@radix-ui/react-separator";
import type { ComponentProps, PropsWithChildren } from "react";

const StyledSeparator: React.FC<
  PropsWithChildren<ComponentProps<typeof Separator.Root>>
> = ({ children, ...props }) => (
  <Separator.Root
    {...props}
    className="mr-3.5 ml-3.5 h-3.5 w-px bg-text-light dark:bg-text-dark"
  >
    {children}
  </Separator.Root>
);

export default StyledSeparator;
