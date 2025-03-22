import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-red-500 flex items-center h-16  text-white">
      <Container>
        <div>
          <Link href="/" className="hidden sm:block">
            <Image src="/logo.svg" alt="logo" width={80} height={0} />
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
