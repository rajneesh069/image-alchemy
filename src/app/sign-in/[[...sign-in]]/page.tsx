import { SignIn } from "@clerk/nextjs";
import React from "react";

function SignInPage() {
  return <SignIn path="/sign-in" />;
}

export default SignInPage;
