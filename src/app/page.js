import HomePage from "./components/homepage/HomePage";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}
