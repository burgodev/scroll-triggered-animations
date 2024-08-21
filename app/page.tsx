import { Welcome, Portfolio } from "./components";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 pb-[320px]">
      <Welcome />
      <Portfolio />
    </main>
  );
};

export default Home;
