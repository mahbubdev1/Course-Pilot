"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  console.log(session);
  // Handle login for different providers
  const handleProviderSignIn = (provider) => {
    signIn(provider);
  };

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button
          onClick={() => signOut()}
          className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 mt-4"
        >
          Sign out
        </button>
      </>
    );
  }

  return (
    <div>
      {/* <button
        onClick={() => signIn("facebook")}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 mb-4"
      >
        Sign In with Facebook
      </button> */}
      <button
        onClick={() => signIn("github")}
        className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 mb-4"
      >
        Sign In with GitHub
      </button>
      <button
        onClick={() => signIn("google")}
        className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 mb-4"
      >
        Sign In with Google
      </button>
    </div>
  );
}
