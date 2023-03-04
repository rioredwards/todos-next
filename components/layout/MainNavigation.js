import Link from "next/link.js";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header>
      <div>Todos</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Todos</Link>
          </li>
          <li>
            <Link to="/new-todo">Add New Todo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
