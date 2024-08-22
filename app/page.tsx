import "tailwindcss/tailwind.css";
import { Welcome, Portfolio, Footer } from "./components";
import { Header } from "./components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-2 sm:p-6 md:p-8 lg:p-10 xl:p-12 pb-[320px]">
        <Welcome />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
