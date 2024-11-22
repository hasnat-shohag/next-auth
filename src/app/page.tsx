import { SignOutButton } from "@/components/auth/sign-out-button";
import { SignIn } from "@/components/auth/signin-button";
import { auth } from "./auth";
import Link from "next/link";

export default async function Home() {

  const session = await auth();

  return (
    <>
      <h1 className="mb-5">Home Page</h1>
      <button>
        <Link href="/dashboard">Dashboard</Link>
      </button>
      <div className="mt-10">
      { session
          ? (
            <>
                  <h1>{session.user?.name}</h1>
                  <SignOutButton />
              </>
          )
          : (
            <>
                  <h1>Guest</h1>
                  <SignIn />
              </>
            )}
      </div>

    </>
  )
}