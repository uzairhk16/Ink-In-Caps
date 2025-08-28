import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="shadow z-50  top-0 relative">
      <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl h-16">
          <Link to="/" className="flex items-center">
            <img
              src="https://media.designrush.com/agencies/352043/conversions/Ink-In-Caps-logo-profile.jpg"
              className="mr-8 h-18"
              alt="Logo"
            />
          </Link>
          
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b 
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                    lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ourwork"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b 
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                    lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Our Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/solutions"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b 
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                    lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Solutions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/career"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b 
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                    lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Career
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/usecases"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b 
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                    lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Use Cases
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center lg:order-2">
            <i className="fa-solid fa-phone" />
            <Link
              to="/contact"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-3xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Contact Us
            </Link>
            <Link
              to="/menu"
              className=" text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Menu
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
