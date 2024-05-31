import About from "./components/About/About";
import ContactMe from "./components/Contact/Contact";
import Header from "./components/Home/Header";
import ToolsAndTech from "./components/service/toolsAndTech";
import Team from "./components/Team/Team";

export default function Home() {
  return (
    <main className="max-w-[1200px] m-auto md:px-4">
      <Header />
      <About />
      <ToolsAndTech />
      <Team />
      <ContactMe />
    </main>
  );
}
