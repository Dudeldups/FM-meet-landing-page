import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";

import "./scss/main.scss";

export default function App() {
  return (
    <div className="main-container">
      <Header />
      <Hero />
      <Features />
    </div>
  );
}
