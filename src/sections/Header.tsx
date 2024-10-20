export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full">
      <nav className="flex gap-1 p-0.5 border rounded-full border-white/15 bg-white/10 backdrop-blur">
        <a className="nav-item" href="#">
          Home
        </a>
        <a className="nav-item" href="#">
          Projects
        </a>
        <a className="nav-item" href="#">
          About
        </a>
        <a
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          href="#"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
