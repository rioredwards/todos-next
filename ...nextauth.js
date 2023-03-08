import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// const credentialsProvider = CredentialsProvider({
//   name: "Credentials",
//   credentials: {
//     email: {
//       label: "email",
//       type: "text",
//       placeholder: "example@email.com",
//     },
//     password: { label: "password", type: "password" },
//   },
//   async authorize(credentials) {
//     console.log("in authorize");
//     const client = await connectToDatabase();
//     const usersCollection = client.db().collection("users");

//     const user = await usersCollection.findOne({
//       email: credentials.email,
//     });

//     if (!user) {
//       client.close();
//       throw new Error("No user found!");
//     }

//     const isValid = await verifyPassword(credentials.password, user.password);

//     if (!isValid) {
//       client.close();
//       throw new Error("Could not log you in!");
//     }

//     client.close();
//     return { email: user.email };
//   },
// });

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    {
      name: "Credentials",
      async authorize(credentials) {
        console.log("in authorize");
        const user = {
          email: credentials.email,
          password: credentials.password,
        };
        return user;
      },
    },
  ],
  pages: {
    signIn: "/auth",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
});
