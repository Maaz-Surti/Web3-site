import logo from "/src/assets/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} />
      <div className="header--buttons">
        <button>Home</button>
        <button>New</button>
        <button>Popular</button>
        <button>Trending</button>
        <button>Categories</button>
      </div>
    </div>
  );
}
