import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

const Main: FC<PropsWithChildren> = ({ children }) => {
  const nav = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  return (
    <>
      <ul>
        {nav.map((item) => (
          <li key={item.name}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      {children}
    </>
  );
};

export default Main;
