import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FaChevronCircleLeft } from "react-icons/fa";
import Head from "next/head";

export default function Bio() {
  return (
    <>
      <Head>
        <title>Lim: Artist Bio</title>
      </Head>
      {/* Header */}
      <Header />

      <section
        id="artist-bio"
        className="min-h-screen overflow-scroll p-12 lg:px-72"
      >
        <div className="flex items-center">
          <button className="rounded-full bg-white p-4 text-black text-3xl">
            <Link href="/">
              <FaChevronCircleLeft />
            </Link>
          </button>
        </div>

        <div className="text-3xl pt-4 text-center font-ndot font-bold">Lim Engen</div>
        
        <div className="font-monospace text-sm lg:px-36 my-4"> 
            Lim - of Capsules is an underground hip-hop artist born and residing in the greater Vancouver area. 
            He began creating music in 2013 and continues to release beautiful and compelling art regularly. Lim 
            is a mixed Korean-European rapper who writes about thought-provoking situations in his life - often involving
            his virtues, experiences and emotions.

            <br /> 
            <br /> 

            <div className="italic">Lim releases music under CAPSULES on Youtube, Soundcloud and all-streaming platforms.</div>
        </div>
        
        <div className="bg-contain bg-center bg-no-repeat bg-bio align-middle items-center h-96 w-full" />

      </section>

      <Footer />
    </>
  );
}
