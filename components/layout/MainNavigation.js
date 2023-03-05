import Link from "next/link.js";
import classes from "@/styles/MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.heroText}>Todos</div>
      <nav>
        <ul className={classes.navLinks}>
          <li>
            <Link href="/">All Todos</Link>
          </li>
          <li>
            <Link href="/new-todo">Add New Todo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
