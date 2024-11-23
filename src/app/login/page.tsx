import { SignInForm } from "@/components/auth/signin-form"
import { auth } from "@/app/auth"
import { redirect } from "next/navigation";

export default async function SignInPage() {
	const session = await auth();

	if (session) {
		redirect("/")
	}

	return (
		<div className="flex items-center justify-center h-screen">
			<SignInForm />
		</div>
	)
}