import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

const MainLayout = () => {
  return (
    <div style={{ backgroundColor: "#EEF2FE", height: "100vh" }}>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
