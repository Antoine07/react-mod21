import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import App from "../App";

export default function Root() {
  const activeStyle = {
    textDecoration: "underline",
  };

  return (
    <>
      <ul className="App">
        <li>
          <NavLink
            to="/dashboard"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sector"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Filière
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/stacks"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Stacks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/questions"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Questions
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
