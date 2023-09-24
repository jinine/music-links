import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FaChevronCircleLeft } from "react-icons/fa";
import Head from "next/head";
import MyComponent from "@/components/Color";
import { Gallery } from "react-grid-gallery";

const acne = [
  {
    src: "/lil_slugger/lil_acne/1.jpg",
    width: 1200,
    height: 1650,
    caption: "",
  },
  {
    src: "/lil_slugger/lil_acne/2.jpg",
    width: 1200,
    height: 1650,
    caption: "",
  },
  {
    src: "/lil_slugger/lil_acne/3.jpg",
    width: 1200,
    height: 1650,
    caption: "",
  },
  {
    src: "/lil_slugger/lil_acne/4.jpg",
    width: 1200,
    height: 1650,
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
        className="min-h-screen overflow-scroll p-12 lg:px-72 mt-2"
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
        </div>

        <div className="font-monospace text-sm my-4"></div>

        <div className="flex">
          {/* <Gallery
            images={acne}
            enableImageSelection={false}
          /> */}
          {acne.map((image: any, index: any) => {
            return <div key={index} className="w-full">
              <img src={image.src} className={`h-${image.height} w-${image.width}`} />
            </div>;
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
