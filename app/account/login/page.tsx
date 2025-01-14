"use client";

import Link from "next/link";
import { Button } from "@first-apps/shared/components";
import { useAuthStore } from "../../store";
import { Role } from "../../models";

export default function Login() {
  const authStore = useAuthStore((state) => state);

  // Dummy login logic
  const handleLogin = () => {
    // router.replace("/creator");
    fetch("/api/account/login");
    authStore.login({
      data: {
        role: Role.CREATOR,
      },
      isAuthenticated: true,
    });
  };

  return (
    <>
      <Button onClick={handleLogin}>Login</Button>
      <Button>Get Session</Button>
      <Link href="/creator">Creator</Link>
    </>
  );
}
