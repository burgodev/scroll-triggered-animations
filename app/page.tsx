import Image from "next/image";
import { Worldcoin, Welcome } from "./components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Welcome />
      <Worldcoin />
    </main>
  );
}
