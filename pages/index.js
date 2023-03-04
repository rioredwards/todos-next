import TodoList from "@/components/todos/TodoList.js";

const DUMMY_TODOS = [
  {
    id: "1",
    description: "This is a first todo!",
  },
  {
    id: "2",
    description: "This is a second todo!",
  },
];

export default function Home() {
  return <TodoList todos={DUMMY_TODOS} />;
}
