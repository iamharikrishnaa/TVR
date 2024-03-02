import {
  Navbar,
  Home,
  Cosmetology,
  Courses,
  Training,
  Contact,
  Footer,
  Pricing,
  Testimony,
} from "./components/index";

function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <Cosmetology/>
      <Training />
      <Courses/>
      <Testimony/>
      <Pricing/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
