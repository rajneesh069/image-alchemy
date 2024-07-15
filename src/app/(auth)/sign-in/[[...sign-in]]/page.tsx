import { SignIn } from "@clerk/nextjs";
import React from "react";

function SignInPage() {
  return <SignIn routing="hash"  afterSignOutUrl={"/"}/>;
}

export default SignInPage;
