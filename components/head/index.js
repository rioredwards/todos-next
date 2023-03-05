import Head from "next/head";

const MyHead = ({ title, description }) => {
  const siteName = "Next Todos";
  const defaultDescription =
    "A simple todo app built with Next.js and MongoDB.";

  return (
    <Head>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="icon" type="image/x-icon" href="todo-logo.png" />
    </Head>
  );
};

export default MyHead;
