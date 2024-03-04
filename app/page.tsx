"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import {
  SignInButton,
  SignedIn,
  SignOutButton,
  SignedOut,
} from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const HomePage = () => {
  const files = useQuery(api.files.getFiles);
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
      {files?.map((file) => {
        return <div key={file.id}>{file.name}</div>;
      })}
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
