import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            height={50}
            width={50}
            src="https://placeimg.com/460/460/people"
            alt="logo"
          />
        </Link>
          <h1>Wecolme</h1>
      </div>
      <div>
        <Link href="/" className="text-blue-500 bg-red-300 p-3 rounded-lg">
            Posible login
        </Link>

      </div>
    </header>
  );
};

export default Header;
