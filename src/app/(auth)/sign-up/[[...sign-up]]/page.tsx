import { SignUp } from "@clerk/nextjs";
import React from "react";

function SignUpPage() {
  return <SignUp path="/sign-up"/>;
}

export default SignUpPage;
