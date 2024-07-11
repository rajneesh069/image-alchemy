import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ClerkProvider afterSignOutUrl="/" afterMultiSessionSingleSignOutUrl="/">{children}</ClerkProvider>;
}
