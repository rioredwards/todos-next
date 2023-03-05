import MainNavigation from "./MainNavigation";

export default function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
}
