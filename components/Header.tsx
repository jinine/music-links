import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white p-4 flex flex-col items-center justify-center lg:top-0 lg:fixed w-screen z-50">
      <Link href="/" className="font-ndot text-black">LIL SLUGGER</Link>
    </header>
  );
};

export default Header;
