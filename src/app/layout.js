import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import { SessionProvider } from "next-auth/react";
import SessionWrapper from "./components/SessionWrapper";
import { AuthProvider } from "@/context/AuthContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Course Pilot",
  description: "AI-Powered Course Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
        <AuthProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </body>
        </AuthProvider>
      </SessionWrapper>
    </html>
  );
}
