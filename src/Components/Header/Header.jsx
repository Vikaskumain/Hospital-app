import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header sticky flex z-50 bg-white w-full justify-evenly items-center cursor-pointer  shadow-xl">
      <div className="flex">
        <Link to="/" className="logo">
          Medi <span className="text-orange-400">Care</span>
        </Link>
        <span className="span1">+</span>
      </div>
      <nav>
        <ul className="navbar flex gap-8 cursor-pointer">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </nav>
      <div>
        <button className="btn rounded-3xl p-1 bg-blue-500">
          Contact
        </button>
      </div>
    </div>
  );
}

export default Header;
