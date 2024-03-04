import { Button } from "@/components/ui/button";
import React from "react";
import { SignInButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div>
      <SignInButton>Hello</SignInButton>
      <Button>Hello</Button>
    </div>
  );
};

export default HomePage;
