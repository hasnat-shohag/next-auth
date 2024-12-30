import { SignInForm } from "@/components/auth/signin-form"
import { auth } from "@/app/auth"
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function SignInPage() {
	const session = await auth();
	const csrfToken = cookies().get("authjs.csrf-token")?.value ?? "";


	if (session) {
		redirect("/")
	}

	return (
		<div className="flex items-center justify-center h-screen">
			<SignInForm csrfToken={csrfToken}/>
		</div>
	)
}