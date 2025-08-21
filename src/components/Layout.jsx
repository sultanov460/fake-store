import { Outlet } from "react-router-dom";
import Nav from "./Navbar/Nav";

export const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
