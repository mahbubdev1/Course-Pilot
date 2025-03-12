import HomePage from "./components/homepage/HomePage";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}
