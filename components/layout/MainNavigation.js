import Link from "next/link.js";

function MainNavigation() {
  return (
    <header>
      <div>Todos</div>
      <nav>
        <ul>
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
