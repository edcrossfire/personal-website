import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Ed | UX Engineer</title>
      </Head>
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Footer />
    </div>
  )
}
