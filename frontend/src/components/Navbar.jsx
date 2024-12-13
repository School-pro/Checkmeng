import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleDropdown = (menu) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link to="/">Checkmeng</Link>
        </div>

        <nav className="hidden md:flex space-x-6">
          <div className="relative group">
            <button
              onMouseEnter={() => toggleDropdown("about")}
              className="flex items-center space-x-1 hover:text-blue-300"
            >
              About <FaChevronDown className="text-sm" />
            </button>
            {dropdownOpen["about"] && (
              <div
                className="absolute left-0 mt-2 bg-white text-black rounded shadow-lg group-hover:block"
                onMouseLeave={() => toggleDropdown("about")}
              >
                <Link to="/about" className="block px-4 py-2 hover:bg-gray-200">
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>
          <Link to="/courses" className="hover:text-blue-300">
            Courses
          </Link>
          <Link to="/institutions" className="hover:text-blue-300">
            Institutions
          </Link>
          <Link to="/blog" className="hover:text-blue-300">
            Blog
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl md:hidden focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-blue-600 text-white">
          <ul className="space-y-4 p-4">
            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                onClick={() => setIsOpen(false)}
                className="block"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/institutions"
                onClick={() => setIsOpen(false)}
                className="block"
              >
                Institutions
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={() => setIsOpen(false)}
                className="block"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
