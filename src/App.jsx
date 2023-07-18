import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Top from "./components/Top/Top";
import Features from "./components/Features/Features";

import "./scss/main.scss";

export default function App() {
  return (
    <div className="main-container">
      <Header />
      <Hero />
      <Top />
      <Features />
    </div>
  );
}
