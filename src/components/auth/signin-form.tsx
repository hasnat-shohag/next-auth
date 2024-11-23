"use client"

import { requestSignIn } from "@/actions/request-sign-in";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const initState = {error: ''};

export const SignInForm = () => {
	const [fstate,action] = useFormState(requestSignIn,initState); 

	useEffect(()=>{
    if (fstate) {
      const { error } = fstate;
      if (error) alert(error);
    }
  }, [fstate])

	return (

		<form action={action} className="flex flex-col gap-6 shadow-md border-1 bg-gray-50 w-1/2 xl:w-1/4 p-6 rounded-md" >
			<label className="flex justify-between items-center">
				Email
				<input name="email" type="email" placeholder="Enter email" 
					className="w-3/4 p-3 rounded-md outline outline-1"
				/>
			</label>
			<label className="flex justify-between items-center">
				Password
				<input name="password" type="password" placeholder="Enter password"
					className="w-3/4 p-3 rounded-md outline outline-1"
				/>
			</label>
			<button type="submit" className="py-3 rounded-md outline outline-1 hover:bg-gray-100">Sign In</button>
		</form>
	)
}