import { SignOutButton } from "@/components/auth/sign-out-button";
import { SignIn } from "@/components/auth/signin-button";
import { auth } from "@/app/auth";
import Link from "next/link";

export default async function Home() {

  const session = await auth();

  return (
    <div className="p-5">
      <h1 className="mb-5 text-center">Home Page</h1>
      <ul className="flex gap-8 font-semibold bg-gray-200 px-5 py-3">
        <button>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        </button>
        <button>
          <Link href="/admin" className="hover:underline">Admin</Link>
        </button>
      </ul>
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

    </div>
  )
}