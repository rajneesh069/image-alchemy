import { SignUp } from "@clerk/nextjs";
import React from "react";

function SignUpPage() {
  return <SignUp routing="hash" afterSignOutUrl={"/"}/>;
}

export default SignUpPage;
