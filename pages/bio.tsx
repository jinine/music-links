import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FaChevronCircleLeft } from "react-icons/fa";
import Head from "next/head";
import MyComponent from "@/components/Color";
import { Gallery } from "react-grid-gallery";

const pikachu = [
  {
    src: "/lil_slugger/lil_pikachu/iMG_0066.JPG",
    width: 1600,
    height: 1200,
    caption: "",
  },
  {
    src: "/lil_slugger/lil_pikachu/iMG_0070.JPG",
    width: 1600,
    height: 1200,
    caption: "",
  },
  {
    src: "/lil_slugger/lil_pikachu/iMG_0075.JPG",
    width: 1600,
    height: 1200,
    caption: "",
  },
  {
    src: "/lil_slugger/lil_pikachu/iMG_0081.JPG",
    width: 1600,
    height: 1200,
    caption: "",
  },
  {
    src: "/lil_slugger/lil_pikachu/iMG_0092.JPG",
    width: 1600,
    height: 1200,
    caption: "",
  },
  {
    src: "/lil_slugger/lil_pikachu/iMG_0100.JPG",
    width: 1600,
    height: 1200,
    caption: "",
  },
  {
    src: "/lil_slugger/lil_pikachu/iMG_0108.JPG",
    width: 1600,
    height: 1200,
    caption: "",
  },
  {
    src: "/lil_slugger/lil_pikachu/iMG_0121.JPG",
    width: 1600,
    height: 1200,
    caption: "",
  },
  {
    src: "/lil_slugger/lil_pikachu/iMG_0130.JPG",
    width: 1600,
    height: 1200,
    caption: "",
  },
];

const rabbit = [
  {
    src: "/lil_slugger/lil_rabbit/wonderful-presskit-1.png",
    width: 2560,
    height: 1444,
    caption: "",
  },
  {
    src: "/lil_slugger/lil_rabbit/wonderful-presskit-2.png",
    width: 2560,
    height: 1444,
    caption: "",
  },
];

const squirtle = [
  {
    src: "/lil_slugger/lil_squirtle/iMG_0146.JPG",
    width: 1600,
    height: 1200,
    caption: "",
  },
  {
    src: "/lil_slugger/lil_squirtle/iMG_0147.JPG",
    width: 1600,
    height: 1200,
    caption: "",
  },
  {
    src: "/lil_slugger/lil_squirtle/iMG_0159.JPG",
    width: 1600,
    height: 1200,
    caption: "",
  },
  {
    src: "/lil_slugger/lil_squirtle/iMG_0160.JPG",
    width: 1600,
    height: 1200,
    caption: "",
  },
  {
    src: "/lil_slugger/lil_squirtle/iMG_0168.JPG",
    width: 1600,
    height: 1200,
    caption: "",
  },
];

export default function Bio() {
  return (
    <>
      <Head>
        <title>Lil Slugger: FW23</title>
      </Head>
      {/* Header */}
      <Header />

      <section
        id="artist-bio"
        className="min-h-screen overflow-scroll p-12 lg:px-72"
      >
        <div className="flex items-center">
          <button className="rounded-full bg-white p-4 text-black text-3xl m-2">
            <Link href="/">
              <FaChevronCircleLeft />
            </Link>
          </button>
        </div>
        <div className="p-12 rounded text-black border-white border-2 align-middle text-center font-ndot canvas-container overflow-hidden">
          <MyComponent />
          <div className="text-2xl">FW23</div>
          {/* <div className="text-md">{description}</div> */}
        </div>

        {/* <div className="bg-contain bg-center bg-no-repeat bg-bio align-middle items-center h-96 w-full" /> */}

        <div className="font-monospace text-sm my-4"></div>

        <div>
          <Gallery images={pikachu} />
        </div>
        <div>
          <Gallery images={rabbit} />
        </div>
        <div>
          <Gallery images={squirtle} />
        </div>
      </section>

      <Footer />
    </>
  );
}
