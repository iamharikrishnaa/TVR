import {
  Navbar,
  Home,
  Cosmetology,
  Courses,
  Teacher,
  Contact,
  Footer,
  Pricing,
} from "./components/index";

function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <Cosmetology/>
      <Teacher />
      <Courses/>
      <Pricing/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
