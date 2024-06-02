import { Footer } from "@/components/footer/Footer";
import { AppRoutes } from "@/router";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <header>
        <NavBar />
      </header> */}

      <main className="min-h-screen">
        <AppRoutes />
      </main>

      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}


