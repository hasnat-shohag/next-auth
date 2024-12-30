'use client'

import { signOut } from "next-auth/react"

export const SignOutButton = () => {

	const handleSignOut = async () => {
		await signOut();
	}

	return (
		<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={handleSignOut}>
			Sign Out
		</button>
	)
}