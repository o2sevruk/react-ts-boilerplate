import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      {children}
    </>
  );
};

export default Main;
