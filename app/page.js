'use client'

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        {session ? (
          <>
            <h1 className="text-2xl font-bold">Hi {session.user.name}!</h1>
            <p className="mt-4">Welcome back to your personalized AI finance advisor.</p>
            <button
              onClick={() => signOut()}
              className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold">Welcome to Your Personalized AI Finance Advisor</h1>
            <p className="mt-4">Please login to continue and get personalized financial advice.</p>
            <button
              onClick={() => signIn()}
              className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}
