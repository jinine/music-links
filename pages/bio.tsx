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
        <div className="text-3xl pt-4 text-center font-ndot font-bold">
          Lim Engen
        </div>

        <div className="bg-contain bg-center bg-no-repeat bg-bio align-middle items-center h-96 w-full" />

        <div className="font-monospace text-sm my-4">
          Lim, who also goes by the name Capsules, is an up-and-coming artist in
          the underground hip-hop scene. With a unique Korean-European
          background, Lim offers a fresh perspective in his music. Drawing
          inspiration from Earl Sweatshirt, Wiki, and early Nas, his tracks
          delve into deep topics with thoughtful lyrics and nostalgic boom-bap
          beats.
          <br />
          <br />
          Since his debut in 2013, Lim has been consistently releasing
          introspective and dynamic tracks that showcase his poetic flow and
          compelling artistry. His music can be found on major streaming
          platforms such as YouTube and SoundCloud under the name CAPSULES.
          Lim's honest lyrics and smooth delivery have garnered him a notable
          reputation in the hip-hop industry.
          <br />
          <br />
          Lim invites you to explore his latest releases and discover the poetic
          artistry of Capsules. Join the growing buzz around this talented
          artist and experience his unique sound for yourself.
          <br />
          <br />
          <div className="italic">
            Lim releases music under CAPSULES on Youtube, Soundcloud and
            all-streaming platforms.
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
