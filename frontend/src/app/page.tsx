import { About } from "@/components/About/about";
import { Banner } from "@/components/Banner/banner";
import { Contact } from "@/components/Contact/contact";
import { Footer } from "@/components/Footer/footer";
import { Header } from "@/components/Header/header";


export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
