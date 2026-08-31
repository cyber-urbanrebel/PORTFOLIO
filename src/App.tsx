import { Outlet } from "react-router-dom";
import BackgroundField from "./components/BackgroundField";
import CursorMotion from "./components/CursorMotion";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0C0C0C]">
      <BackgroundField />
      <div className="grain" aria-hidden="true" />
      <ScrollProgress />
      <CursorMotion />
      <Outlet />
    </div>
  );
}
