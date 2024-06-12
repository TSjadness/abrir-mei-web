import { Footer } from "@/components/footer/Footer";
import { AppRoutes } from "@/router";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="nc-PageHome relative overflow-hidden">
        <div className="">
        <AppRoutes />
        </div>
      </main>
    </div>
  );
}


