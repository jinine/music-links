import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-black p-4 flex flex-col items-center justify-center lg:top-0 lg:fixed">
      <Link href="/">
        <img src="lim1.png" alt="Logo" className="w-32" />
      </Link>

      <div className="block lg:hidden"></div>
    </header>
  );
};

export default Header;
