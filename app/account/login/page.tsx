"use client";

import Link from "next/link";
import { Button } from "@first-apps/shared/components";

export default function Login() {
  const handleLogin = () => {
    // router.replace("/creator");
    fetch("/api/account/login");
  };

  return (
    <>
      <Button onClick={handleLogin}>Login</Button>
      <Button>Get Session</Button>
      <Link href="/signup">Go to Signup</Link>
    </>
  );
}
