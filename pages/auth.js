import { useEffect, useState } from "react";
import AuthForm from "../components/auth/authForm";
import { useRouter } from "next/router";
import classes from "@/styles/AuthForm.module.css";
import { getSession } from "next-auth/react";

function AuthPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // redirect to profile page if user is authenticated
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        console.log("Not authenticated");
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p className={classes.profile}>Loading...</p>;
  }

  return <AuthForm />;
}

export default AuthPage;
