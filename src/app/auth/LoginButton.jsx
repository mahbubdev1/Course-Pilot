"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import useAxiosPublic from "../axios/hooks/useAxiosPublic";
const axiosPublic = useAxiosPublic();

export default function LoginButton() {
  const { data: session } = useSession();

  const handleProviderSignIn = async (provider) => {
    try {
      const res = await signIn(provider);
      console.log("res", res);
      // { callbackUrl: "/" }
    } catch (error) {
      console.error("Error signing in with provider:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button
          onClick={handleSignOut}
          className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 mt-4"
        >
          Sign out
        </button>
      </>
    );
  }

  return (
    <div>
      <button
        onClick={() => handleProviderSignIn("github")}
        className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 mb-4"
      >
        Sign In with GitHub
      </button>
      <button
        onClick={() => handleProviderSignIn("google")}
        className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 mb-4"
      >
        Sign In with Google
      </button>
    </div>
  );
}
