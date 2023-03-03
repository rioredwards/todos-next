import Head from "next/head";
import TodoPage from "./TodosPage.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Todos App</title>
        <meta name="description" content="My cool todos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/todo-logo.png" />
      </Head>
      <main>
        <TodoPage />
      </main>
    </>
  );
}
