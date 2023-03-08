// import UserProfile from "../components/profile/userProfile";
// import { getSession } from "next-auth/react";

function ProfilePage() {
  return (
    <>
      <div>Temp Profile Page</div>
      {/* <UserProfile /> */}
    </>
  );
}

/* 
export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      // TODO: Update me?
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
*/

export default ProfilePage;
