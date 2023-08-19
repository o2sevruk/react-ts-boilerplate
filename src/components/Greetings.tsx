import { FC } from "react";

type Props = {
  pageName?: string;
};

const Greetings: FC<Props> = ({ pageName = "Index" }) => {
  return <div>Greetings, {pageName}</div>;
};

export default Greetings;
