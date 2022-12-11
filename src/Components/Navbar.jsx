import NavBtn from "./NavBtn";

const Navbar = () => {
  return (
    <header className="topheader flex">
      <nav className=" topnav flex">
        <button className="mainlogo">
          <img src="/logo.png" alt="netflix" width="95px" />
        </button>
        <NavBtn href="/browse"> Beranda</NavBtn>
        <NavBtn href="/browse"> Acara Tv</NavBtn>
        <NavBtn href="/browse"> Film</NavBtn>
        <NavBtn href="/browse"> Baru & Populer</NavBtn>
        <NavBtn href="/browse"> Daftar Saya</NavBtn>
        <NavBtn href="/browse"> Telusuri menurut Bahasa</NavBtn>
      </nav>
      <div></div>
    </header>
  );
};

export default Navbar;
