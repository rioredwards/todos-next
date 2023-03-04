export default function TodoDetail(props) {
  return (
    <section>
      <span>{props.id}</span>
      <h1>{props.description}</h1>
    </section>
  );
}
