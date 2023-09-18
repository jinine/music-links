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
    attributes:{
      url: "https://youtu.be/rD7JjIQztvc",
      youtube: true,
      spotify: false,
      title: "CAPSULES - SHADOW (produced by Dewey Decimal)",
      description: "",
      image: ""
    }
  },
  {
    id: uid(),
    attributes: {
      url: "https://youtu.be/pZjng2FynbA",
      youtube: true,
      spotify: false,
      title: "CAPSULES - MANOFTHEYEAR (OFFICIAL VIDEO)",
      description: "MANOFTHEYEAR Music Video",
      image: "/alco-art.png",
    },
  },
  {
    id: uid(),
    attributes: {
      url: "https://youtu.be/RvKnzEafI6Y",
      youtube: false,
      spotify: false,
      title: "CAPSULES - Wonderful (Video)",
      description: "Watch CAPSULES - WONDERFUL",
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
      description: "Listen to CAPSULES - Wonderful on YouTube now!",
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

const newestReleaseDescription: String = "";

export default function Home() {
  let NewestRelease: MusicLink = Links[0];
  let links: MusicLink[] = Links.slice(1, 4);
  let pastLinks: MusicLink[] = Links.slice(4);

  // console.log(NewestRelease)

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>LIL SLUGGER</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Content */}
      <section id="body" className="min-h-screen overflow-scroll p-12 lg:px-72 mt-4">
        {/* Title  */}
        <div className="p-12 rounded text-black border-white border-2 align-middle text-center font-ndot canvas-container overflow-hidden">
          <MyComponent />
          <div className="text-2xl lg:text-4xl">LIL SLUGGER</div>
        </div>

        {/* Menu */}
        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-center">
          <div
            className=" hover:border-white text-white align-middle text-center my-2 mx-2 w-72 lg:w-auto underline hover:text-blue-500"
            style={{ wordWrap: "break-word" }}
          >
            <Link
              href="/bio"
              className="block p-4 uppercase font-ndot text-xl  lg:text-4xl"
            >
              FW23
            </Link>
          </div>
         
        </div>


        <div className="bg-bio">

        {/* Featured */}
        <div className="py-4 font-bold text-2xl lg:text-4xl font-ndot">Newest Release</div>
        {/* Video Background */}
        <div>
          <div className="text-center align-middle font-ndot text-white">
            {NewestRelease.attributes.youtube ? (
              <YouTube
                videoId="rD7JjIQztvc"
                className="h-96"
                opts={{
                  height: "100%",
                  width: "100%",
                  playerVars: {
                    autoplay: 0,
                    loop: 1,
                    controls: 1,
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0,
                    disablekb: 1,
                    start: 1,
                    fs: 1,
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
          <div className="py-4 font-bold text-2xl font-ndot lg:text-4xl">New Music</div>
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
                    <div className="font-ndot text-xl lg:text-6xl font-bold hover:underline">
                      {link.attributes.title}
                    </div>
                    <div className="font-monospace text-sm  lg:text-4xl">
                      {link.attributes.description}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Previous  */}
          {pastLinks.length > 0 ? (
            <div className="border-2 border-white rounded p-4">
              <div className="py-4 font-bold text-2xl font-ndot">
                More Content
              </div>
              <div className="overflow-x-scroll">
                {pastLinks.map((link: MusicLink) => (
                  <Link
                    href={link.attributes.url}
                    key={link.id}
                    className="mx-2 "
                    target="_blank"
                  >
                    <div className="hover:bg-secondary hover:text-black w-full h-full rounded container lg:space-y-0 border-2 border-white p-8">
                      {/* <div className="p-4">
                        <img
                          src={link.attributes.image}
                          alt={link.attributes.description}
                          className="rounded"
                        />
                      </div> */}
                      <div className="">
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

        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </>
  );
}
