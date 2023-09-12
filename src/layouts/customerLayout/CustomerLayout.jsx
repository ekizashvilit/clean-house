import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const CustomerLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default CustomerLayout;
