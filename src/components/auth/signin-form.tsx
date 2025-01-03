"use client"

import { signIn } from "next-auth/react";
import { useState } from "react";

export const SignInForm = ({ csrfToken }: {csrfToken: string}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  };

  return (
    <form onSubmit={handleSubmit} method="POST" className="flex flex-col gap-6 shadow-md border-1 bg-gray-50 w-1/2 xl:w-1/4 p-6 rounded-md">
      {csrfToken && <input type="hidden" name="csrfToken" value={csrfToken} />}
      
      <label className="flex justify-between items-center">
        Email
        <input
          name="email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-3/4 p-3 rounded-md outline outline-1"
        />
      </label>
      
      <label className="flex justify-between items-center">
        Password
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-3/4 p-3 rounded-md outline outline-1"
        />
      </label>
      
      <button type="submit" className="py-3 rounded-md outline outline-1 hover:bg-gray-100">
        Sign In
      </button>
    </form>
  );
};
