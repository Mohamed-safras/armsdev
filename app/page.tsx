import ContactMe from "./components/Contact/Contact";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <main className="max-w-[1200px] m-auto md:px-4">
      <Header />
      <ContactMe />
    </main>
  );
}
