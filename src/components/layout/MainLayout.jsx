import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const MainLayout = () => {
  return (
    <div
      style={{
        backgroundColor: "#EEF2FE",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
