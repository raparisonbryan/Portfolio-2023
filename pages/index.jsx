import Head from "next/head";
import Header from "../src/Header/Header";
import Hero from "../src/Hero/Hero";
import About from "../src/About/About";
import Skills from "../src/Skills/Skills";
import Projects from "../src/Projects/Projects";
import Contact from "../src/Contact/Contact";
import Footer from "../src/Footer/Footer";
import Colors from "../src/Colors/Colors";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bryan Raparison</title>
        <meta
          name="description"
          content="Superbe portfolio de bryan Raparison"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*<Colors/>*/}
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
