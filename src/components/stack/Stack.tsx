import { FC } from "react";

interface IProps {
  stackItem: string;
}

const Stack: FC<IProps> = ({ stackItem }) => {
  return <span className="bg-green-500 px-6 py-1 rounded">{stackItem}</span>;
};

export default Stack;
