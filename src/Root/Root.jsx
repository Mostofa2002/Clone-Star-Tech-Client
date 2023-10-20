import { Outlet } from "react-router-dom";
import Nav from "../pages/Nav";
import Footer from "../pages/Footer";

const Root = () => {
  return (
    <div className="dark:bg-gray-800">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
