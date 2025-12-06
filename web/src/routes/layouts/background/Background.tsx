import { Outlet } from "react-router";
import backgroundImage from "../../../assets/plant.svg";

export const Background = () => {
  return (
    <div className="bg-background h-screen overflow-hidden relative">
      <img
        src={backgroundImage}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <Outlet />
    </div>
  );
};
