import { auth, signIn } from '@/app/auth'

export default async function Dashboard() {
  const session = await auth();

  if(!session) return signIn();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello {session?.user?.name} 
    </main>
  )
}