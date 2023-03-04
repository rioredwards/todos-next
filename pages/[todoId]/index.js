import TodoDetail from "@/components/todos/TodoDetail.js";

const DUMMY_TODO = {
  id: "1",
  description: "This is a first todo!",
};

export default function TodoDetails(props) {
  return (
    <>
      <TodoDetail
        id={DUMMY_TODO.id}
        description={DUMMY_TODO.description}></TodoDetail>
    </>
  );
}
