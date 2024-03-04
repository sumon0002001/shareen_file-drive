import { Button } from "@/components/ui/button";
import React from "react";
import {
  SignInButton,
  SignedIn,
  SignOutButton,
  SignedOut,
} from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div>
      <SignedIn>
        <SignOutButton>
          <Button>Signout</Button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Signin</Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
};

export default HomePage;
