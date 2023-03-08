import Link from "next/link.js";
import classes from "@/styles/MainNavigation.module.css";
import { useSession, signOut } from "next-auth/react";

function MainNavigation() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  function logoutHandler() {
    signOut();
  }

  return (
    <header className={classes.header}>
      <Link href="/" className={classes.heroText}>
        ToDos
      </Link>
      <nav>
        <ul className={classes.navLinks}>
          {!session && !loading && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          {session && (
            <>
              <li>
                <Link href="/">All Todos</Link>
              </li>
              <li>
                <Link href="/new-todo">Add New Todo</Link>
              </li>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
