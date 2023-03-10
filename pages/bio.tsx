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

        <div className="font-monospace text-sm my-4">
          Lim, also known as Capsules, is a rising star in the underground
          hip-hop scene. With a mixed Korean-European background, Lim's music
          brings a unique perspective to his audience. Drawing inspiration from
          Earl Sweatshirt, Wiki, and early Nas, his tracks explore
          thought-provoking situations with captivating lyrics and nostalgic
          boom-bap beats. 
          <br />
          <br />
          Since his debut in 2013, Lim has consistently released
          introspective and dynamic tracks, showcasing his poetic flow and
          compelling artistry. He releases his music under the name CAPSULES,
          and his work can be found on major streaming platforms like YouTube
          and SoundCloud. Lim's honest lyrics and smooth delivery have made him
          a prominent voice in the world of hip-hop. 
          <br />
          <br />
          He invites you to explore
          his latest releases and experience for yourself what makes his music
          stand out. Join the growing buzz around this artist and discover the
          poetic artistry of Lim (of Capsules).
          <br />
          <br />
          <div className="italic">
            Lim releases music under CAPSULES on Youtube, Soundcloud and
            all-streaming platforms.
          </div>
        </div>

        <div className="bg-contain bg-center bg-no-repeat bg-bio align-middle items-center h-96 w-full" />
      </section>

      <Footer />
    </>
  );
}
