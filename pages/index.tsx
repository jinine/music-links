import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Link from "next/link";
import { uid } from "uid";
import Footer from "@/components/Footer";
import MyComponent from "@/components/Color";
import { FaCaretRight } from "react-icons/fa";
import { useState } from "react";
import YouTube from "react-youtube";

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
      url: "https://youtu.be/oKPAUL_VHes",
      youtube: false,
      spotify: true,
      title: "CAPSULES - Wonderful (Audio)",
      description: "Pre-Save CAPSULES' newest release here - releasing 03/21",
      image: "/wonderful.png",
    },
  },
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
  "Lim is an independent musician that makes alternative hip-hop music based out of Vancouver, BC living on the traditional territories of the xʷməθkʷəy̓əm (Musqueam), Skwxwú7mesh (Squamish), and səlil̓ilw̓ətaʔɬ (Tsleil-Waututh) peoples.";

const newestReleaseDescription: String =
  "Experience the soulful and introspective track 'Wonderful' by Lim (of Capsules), a poetic journey through the landscape of love and dreams. With a nostalgic boom-bap beat inspired by the likes of early Mac Miller and Pete Rock, 'Wonderful' showcases Lim's dynamic flow and reflective lyricism. The song's lyrics are both honest and vulnerable, exploring the complexities of relationships and the struggles of chasing one's dreams. 'You were the light in my life, but I was too dim', Lim laments, capturing the universal feeling of inadequacy and self-doubt that often accompanies personal growth. As the song unfolds, Lim delves deeper into the intricacies of the human experience, offering insights that are both relatable and inspiring. 'Dreams just dreams 'til you make it happen,' Lim declares, reminding listeners of the power of perseverance and determination in the face of adversity. With its blend of raw talent, creativity, and emotional depth, 'Wonderful' is a true work of art that speaks to the human condition in a way that is both poignant and timeless. So why not take a journey with Lim through the landscape of love and dreams? You won't be disappointed.";

  export default function Home() {
  let NewestRelease: MusicLink = Links[0];
  let links: MusicLink[] = Links.slice(1, 4);
  let pastLinks: MusicLink[] = Links.slice(4);

  return (
    <>
      <Head>
        <title>LIM</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Content */}
      <section id="body" className="min-h-screen overflow-scroll p-12 lg:px-72">
        {/* Title  */}
        <div className="p-12 rounded text-black border-white border-2 align-middle text-center font-ndot canvas-container overflow-hidden">
          <MyComponent />
          <div className="text-2xl">LIM ENGEN</div>
          <div className="text-md">{description}</div>
        </div>

        {/* Bio  */}
        <div className="bg-black hover:bg-white border-2 hover:text-black hover:border-white text-white align-middle text-center my-2 w-1/3 mx-auto">
          <button className="uppercase font-monospace text-xl">
            <Link href="/bio" className="flex items-center">
              Read Bio <span className="px-2" />
              <FaCaretRight />
            </Link>
          </button>
        </div>

        {/* Featured */}
          <div className="py-4 font-bold text-2xl font-ndot">
            Newest Release
          </div>
          {/* Video Background */}
          <div>
            <div className="text-center align-middle font-ndot text-white">
              {NewestRelease.attributes.youtube ? (
                <YouTube
                  videoId="-_o5uiCJLZg"
                  className="h-96"
                  opts={{
                    height: "100%",
                    width: "100%",
                    playerVars: {
                      autoplay: 1,
                      loop: 1,
                      controls: 0,
                      modestbranding: 1,
                      showinfo: 0,
                      rel: 0,
                      disablekb: 1,
                      start: 1,
                      fs: 0,
                      iv_load_policy: 3,
                    },
                  }}
                />
              ) : (
                <div className="container lg:grid lg:grid-cols-2 space-y-2 lg:space-y-0">
                  <div className="flex justify-center">
                    <Link
                      href={NewestRelease.attributes.url}
                      className="hover:underline"
                      target='_blank'
                    >
                      <img
                        src={NewestRelease.attributes.image}
                        alt={NewestRelease.attributes.description}
                        className="rounded h-96"
                      />
                    </Link>
                  </div>
                  <div className="font-monospace">
                    <Link
                      href={NewestRelease.attributes.url}
                      className="hover:underline font-ndot text-xl"
                      target='_blank'
                    >
                      {NewestRelease.attributes.title}
                    </Link>
                    <br />
                    <br />
                    {newestReleaseDescription}
                  </div>
                </div>
              )}
            </div>
        </div>

        {/* Latest */}
        <div>
          <div className="py-4 font-bold text-2xl font-ndot">New Music</div>
          <div className={styles.linksContainer}>
            {links.map((link: MusicLink) => (
              <Link href={link.attributes.url} key={link.id} className="py-8" target='_blank'>
                <div className="my-4 hover:bg-secondary hover:text-black w-full h-full rounded container mx-auto space-y-2 lg:space-y-0 lg:grid lg:grid-cols-2 border-2 border-white">
                  <div className="p-4 lg:w-1/2">
                    <img
                      src={link.attributes.image}
                      alt={link.attributes.description}
                      className="rounded"
                    />
                  </div>

                  <div className="py-4 p-2">
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

          {/* Previous  */}
          {pastLinks.length > 0 ? (
            <div className="border-2 border-white rounded p-4 h-72">
              <div className="py-4 font-bold text-2xl font-ndot">
                More Content
              </div>
              <div className="flex overflow-y-scroll h-48">
                {pastLinks.map((link: MusicLink) => (
                  <Link
                    href={link.attributes.url}
                    key={link.id}
                    className="mx-2 w-72 h-36 flex-shrink-0"
                    target='_blank'
                  >
                    <div className="my-4 hover:bg-secondary hover:text-black w-full h-full rounded container space-y-2 lg:space-y-0 lg:grid lg:grid-cols-2 border-2 border-white">
                      <div className="p-4">
                        <img
                          src={link.attributes.image}
                          alt={link.attributes.description}
                          className="rounded"
                        />
                      </div>
                      <div className="py-4 p-2">
                        <div className="font-ndot text-sm font-bold hover:underline">
                          {link.attributes.title}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}
