import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <div>Landing Page (UnProtected)</div>
      <div>
        <Link href="/sign-in">
          <Button variant="outline">
            Login
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button>
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
