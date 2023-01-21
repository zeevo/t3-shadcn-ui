import type { FunctionComponent, ReactNode } from "react";

interface CodeProps {
  children: ReactNode;
}

const Code: FunctionComponent<CodeProps> = ({ children }) => {
  return (
    <pre className="bg-accent">
      <code>{children}</code>
    </pre>
  );
};

export default Code;
