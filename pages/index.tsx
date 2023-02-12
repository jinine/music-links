import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Link from "next/link";
import { uid } from "uid";
import Footer from "@/components/Footer";

type MusicLink = {
  id: React.Key;
  attributes: {
    url: string;
    youtube: boolean;
    spotify: boolean;
    title: string;
    description: string;
    image: string;
  };
};

const Links: MusicLink[] = [
  {
    id: uid(),
    attributes: {
      url: "https://open.spotify.com/album/3GT2Jo48myPUk8PeF0Zirl?si=bac3CU6jQXyHJJbXJsOlkA",
      youtube: true,
      spotify: false,
      title: "Please, Believe - CAPSULES",
      description: "Listen to Please, Believe by CAPSULES on Spotify!",
      image: "/please-believe.png",
    },
  },
  {
    id: uid(),
    attributes: {
      url: "https://www.youtube.com/watch?v=Ip6edpyVM10",
      youtube: true,
      spotify: false,
      title: "You Didn`t Love Me (Audio)",
      description: "Listen to You Didn`t Love me by CAPSULES on YOUTUBE!",
      image: "/you_didnt_love_me.png",
    },
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>CAPSULES</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Content */}
      <section id="body" className="min-h-screen overflow-scroll p-12 lg:px-72">
        <div>
          <div className={styles.linksContainer}>
            {Links.map((link: MusicLink) => (
              <Link href={link.attributes.url} key={link.id} className="py-8">
                <div className="hover:bg-secondary hover:text-black">
                  <div className="p-4">
                     <img
                    src={link.attributes.image}
                    alt={link.attributes.description}
                    className="rounded"
                  />
                  </div>
               
                  <div className="p-2 py-4">
                    <div className="font-soehne text-xl font-bold hover:underline">
                      {link.attributes.title}
                    </div>
                    <div className="font-firasans text-md">
                      {link.attributes.description}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}
