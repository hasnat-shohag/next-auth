import { signIn } from "@/app/auth"
 
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn()
      }}
    >
      <button 
        type="submit" 
        className="px-5 py-2 mt-2 outline outline-1 rounded-lg inline-block"
      >Sign in</button>
    </form>
  )
}