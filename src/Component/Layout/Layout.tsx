import { Outlet } from "react-router";
import NavbarPage from "../Navbar/NavbarPage";

export default function Layout() {
  return (
    <div>
      <div className="absolute top-5 left-0 flex justify-center w-full z-50">
        <NavbarPage />
      </div>
        <Outlet/>
    </div>
  );
}

