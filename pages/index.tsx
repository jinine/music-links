import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Link from "next/link";
import { uid } from "uid";
import Footer from "@/components/Footer";
import MyComponent from "@/components/Color";

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
      url: "https://youtu.be/-_o5uiCJLZg",
      youtube: true,
      spotify: false,
      title: "You Didn't Love Me (Official Video)",
      description:
        "Watch CAPSULES - You Didn't Love Me (Like You Said You Would) Official Video on YouTube now!",
      image: "/you_didn't_love_me_snapshot.png",
    },
  },
  {
    id: uid(),
    attributes: {
      url: "https://open.spotify.com/album/3GT2Jo48myPUk8PeF0Zirl?si=bac3CU6jQXyHJJbXJsOlkA",
      youtube: false,
      spotify: true,
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

const description: String =
  "Lim is an independent musician that makes alternative hip-hop music based out of Vancouver, BC.";

export default function Home() {
  let links: MusicLink[] = Links.slice(0, 3);
  let pastLinks: MusicLink[] = Links.slice(3);

  return (
    <>
      <Head>
        <title>LIM</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Content */}
      <section id="body" className="min-h-screen overflow-scroll p-12 lg:px-72">
        <div className="p-12 rounded text-black border-white border-2 align-middle text-center font-ndot canvas-container overflow-hidden">
          <MyComponent />
          <div className="text-2xl">LIM ENGEN</div>
          <div className="text-md">{description}</div>
        </div>

        <div>
          <div className="py-4 font-bold text-2xl font-ndot">New Music</div>
          <div className={styles.linksContainer}>
            {links.map((link: MusicLink) => (
              <Link href={link.attributes.url} key={link.id} className="py-8">
                <div className="my-4 hover:bg-secondary hover:text-black w-full h-full rounded container mx-auto space-y-2 lg:space-y-0 lg:grid lg:grid-cols-2 border-2 border-white">
                  <div className="p-4 lg:w-1/2">
                    <img
                      src={link.attributes.image}
                      alt={link.attributes.description}
                      className="rounded"
                    />
                  </div>

                  <div className="py-4 lg:w-1/2 p-2">
                    <div className="font-ndot text-xl font-bold hover:underline">
                      {link.attributes.title}
                    </div>
                    <div className="font-monospace text-sm">
                      {link.attributes.description}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div>
            {pastLinks.map((link: MusicLink) => (
              <>{link.attributes.title}</>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}
