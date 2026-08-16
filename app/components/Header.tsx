import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  return (
    <>
      {/* Desktop */}

      <header className="hidden lg:block fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <HeaderDesktop />
      </header>

      {/* Mobile */}

      <header className="lg:hidden fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black">
        <HeaderMobile />
      </header>
    </>
  );
}