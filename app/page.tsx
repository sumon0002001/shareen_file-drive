"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import {
  SignInButton,
  SignedIn,
  SignOutButton,
  SignedOut,
} from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const HomePage = () => {
  const createFile = useMutation(api.files.createFile);
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
      <Button
        onClick={() => {
          createFile({
            name: "test.txt",
          });
        }}
      >
        click me
      </Button>
    </div>
  );
};

export default HomePage;
