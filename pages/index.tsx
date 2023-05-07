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

type PressRelease = {
  id: React.Key;
  attributes: {
    title: string;
    description: string;
    images: string[];
    links: {
      url: string;
      spotify: boolean;
      youtube: boolean;
    };
  };
};

const press_releases: PressRelease[] = [
  {
    id: uid(),
    attributes: {
      title: "CAPSULES - Wonderful Video",
      description: `
      To New Fans, Acquaintances and Old Friends, 

      This is a video that I imagined and realized with very limited budget and resources. At my core I believe that these kinds of 
      constraints can truly test the talent of the artist. It's easy to make the already magnificent seem beautiful but it truly takes 
      ingenuity and creativity to take even the smallest and most insignificant iod of the human fabric and spin it into something great. Not to say that I am any sort of genius creatively or that I'd never want to create studio albums or films - but that even if I never end up having the opportunity to work on large scale productions; there's fulfilment in these pieces that I make for you and with them I feel complete. 

      With that being said I bring to you -- Wonderful, the newest music video by CAPSULES. Shot on location in Sechelt, Burnaby and Maple Ridge - this video intends to combine modern rap and hip-hop with the quaint, slow-moving pace of life in some beautiful locations within British Columbia. In contrast, I myself play a hip-hop loving young-adult that's still holding onto the ambition that he's meant for something larger than what these small towns can offer. Directed, Edited and Performed by myself and shot by my good friend, I truly believe that this is my best work so far and a stepping stone toward something more significant in my journey.

      Lim Engen / CAPSULES 
      `,
      images: ["/wonderful.png"],
      links: {
        url: "https://youtu.be/RvKnzEafI6Y",
        youtube: true,
        spotify: false,
      },
    },
  },
];

const Links: MusicLink[] = [
  {
    id: uid(),
    attributes: {
      url: "https://youtu.be/RvKnzEafI6Y",
      youtube: true,
      spotify: false,
      title: "CAPSULES - Wonderful (Video)",
      description: "Listen to CAPSULES' newest release here",
      image: "/wonderful.png",
    },
  },
  {
    id: uid(),
    attributes: {
      url: "https://youtu.be/oKPAUL_VHes",
      youtube: false,
      spotify: true,
      title: "CAPSULES - Wonderful (Audio)",
      description: "Watch CAPSULES - Wonderful on YouTube now!",
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

const newestReleaseDescription: String = "";

export default function Home() {
  let NewestRelease: MusicLink = Links[0];
  let links: MusicLink[] = Links.slice(1, 4);
  let pastLinks: MusicLink[] = Links.slice(4);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
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

        {/* Menu */}
        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-center">
          <div
            className=" hover:border-white text-white align-middle text-center my-2 mx-2 w-72 lg:w-auto underline hover:text-blue-500"
            style={{ wordWrap: "break-word" }}
          >
            <Link
              href="/bio"
              className="block p-4 uppercase font-monospace text-xl"
            >
              Bio
            </Link>
          </div>
          {/* <div
            className="hover:border-white text-white align-middle text-center my-2 mx-2 lg:w-auto w-72 underline hover:text-blue-500"
            style={{ wordWrap: "break-word" }}
          >
            <Link
              href="/gallery"
              className="block p-4 uppercase font-monospace text-xl"
            >
              Gallery
            </Link>
          </div>
          <div
            className="hover:border-white text-white align-middle text-center my-2 mx-2 lg:w-auto w-72 underline hover:text-blue-500"
            style={{ wordWrap: "break-word" }}
          >
            <Link
              href="/press-release"
              className="block p-4 uppercase font-monospace text-xl"
            >
              Press Releases
            </Link>
          </div> */}
        </div>

        {/* Featured */}
        <div className="py-4 font-bold text-2xl font-ndot">Newest Release</div>
        {/* Video Background */}
        <div>
          <div className="text-center align-middle font-ndot text-white">
            {NewestRelease.attributes.youtube ? (
              <YouTube
                videoId="RvKnzEafI6Y"
                className="h-96"
                opts={{
                  height: "100%",
                  width: "100%",
                  playerVars: {
                    autoplay: 1,
                    loop: 1,
                    controls: 1,
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
              <div className="container lg:grid lg:grid-cols-2 space-y-2 lg:space-x-2 lg:space-y-0">
                <div className="flex justify-center">
                  <Link
                    href={NewestRelease.attributes.url}
                    className="hover:underline"
                    target="_blank"
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
                    target="_blank"
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
              <Link
                href={link.attributes.url}
                key={link.id}
                className="py-8"
                target="_blank"
              >
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
                    target="_blank"
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
