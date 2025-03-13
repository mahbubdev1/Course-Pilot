import HomePage from "./components/homepage/HomePage";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-10">
        <HomePage></HomePage>
      </div>
      <Footer></Footer>
    </div>
  );
}
