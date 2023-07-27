import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Stack: FC<IProps> = ({ children }) => {
  return <span className="bg-green-500 px-6 py-1 rounded">{children}</span>;
};

export default Stack;
