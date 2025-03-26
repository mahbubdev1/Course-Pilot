"use client";
import useAxiosPublic from "@/app/axios/hooks/useAxiosPublic";
import { useSession } from "next-auth/react";
import { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
  console.log(session?.user);
  const axiosPublic = useAxiosPublic();

  const handleUserCollection = async () => {
    //  check user
    const user = await session?.user;
    const { email } = user;
    console.log(email);
    const isUserExist = await axiosPublic.get(`/users?email=${email}`);

    // POST  user

    if (!isUserExist?.data) {
      const res = await axiosPublic.post("/users", user);
      console.log(res);
      if (res?.data?.insertedId) {
        console.log("User registered successfully");
      } else {
        console.log("User registration failed");
      }
    }
  };
  useEffect(() => {
    if (status === "loading") {
      setLoading(true);
    } else {
      try {
        setUser(session?.user || null);
        handleUserCollection();
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
  }, [session, status]);

  return (
    <AuthContext.Provider value={{ user, loading, session }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};
