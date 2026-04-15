import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* MENU RESPONSIVE */}
      <section className={`menu__responsive fixed left-0 top-0 w-full h-screen bg-blue-50 z-50 overflow-y-scroll ${isMenuOpen ? 'menuResponsiveActive' : ''}`}>
        <div className="flex justify-between items-center p-[20px]">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img className="w-[30px]" src={logo} alt="Logo" />
          </Link>
          <li 
            id="iconX"
            onClick={toggleMenu}
            className="w-[28px] h-[28px] bg-[#00d084] flex justify-center items-center rounded-full cursor-pointer list-none"
          >
            <svg className="w-[15px] h-[15px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </li>
        </div>
        <ul className={`menu__reponsive--ul p-[20px] ${isMenuOpen ? 'menuResponsiveUlActive' : ''}`}>
          <li>
            <Link className="text-[18px] py-[10px] block border-b-[1px] border-gray-600" to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link className="text-[18px] py-[10px] flex items-center gap-[5px]" to="/services" onClick={() => setIsMenuOpen(false)}>
              Servicios
              <svg className="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.996 16.75C12.332 16.75 12.621 16.617 12.879 16.36L18.73 10.36C18.934 10.156 19.043 9.90599 19.043 9.60999C19.043 8.99999 18.559 8.51599 17.957 8.51599C17.66 8.51599 17.379 8.63299 17.16 8.85199L12.004 14.164L6.84003 8.85199C6.62103 8.64099 6.34803 8.51599 6.04303 8.51599C5.44103 8.51599 4.95703 8.99999 4.95703 9.60899C4.95703 9.90599 5.06703 10.156 5.27003 10.367L11.121 16.359C11.395 16.625 11.668 16.75 11.996 16.75Z" fill="currentColor" fillOpacity="1"></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link className="text-[18px] py-[10px] flex items-center gap-[5px]" to="/blog" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link className="text-[18px] py-[10px] block border-b-[1px] border-gray-600" to="/about" onClick={() => setIsMenuOpen(false)}>Acerca de</Link>
          </li>
          <li>
            <Link className="text-[18px] py-[10px] block border-b-[1px] border-gray-600" to="/booking" onClick={() => setIsMenuOpen(false)}>0189 71 24 21</Link>
          </li>
          <li>
            <Link className="text-[18px] py-[10px] block border-b-[1px] border-gray-600" to="/booking" onClick={() => setIsMenuOpen(false)}>Reservar una cita</Link>
          </li>
        </ul>
      </section>

      {/* HEADER */}
      <header 
        id="header" 
        style={{ backgroundColor: 'white' }}
        className="sticky top-[10px] z-40 px-[20px] duration-300 transition-all bg-white rounded-[15px]">
        <nav className="flex justify-between items-center">
          <ul className="flex">
            <li>
              <Link to="/" className="p-[20px] hover:text-[#00d084] duration-200 transition-all block">Hogar</Link>
            </li>
            <li className="header__servicios--li">
              <Link to="/services" className="p-[20px] hover:text-[#00d084] duration-200 transition-all flex items-center">
                Servicios
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11.996 16.75C12.332 16.75 12.621 16.617 12.879 16.36L18.73 10.36C18.934 10.156 19.043 9.90599 19.043 9.60999C19.043 8.99999 18.559 8.51599 17.957 8.51599C17.66 8.51599 17.379 8.63299 17.16 8.85199L12.004 14.164L6.84003 8.85199C6.62103 8.64099 6.34803 8.51599 6.04303 8.51599C5.44103 8.51599 4.95703 8.99999 4.95703 9.60899C4.95703 9.90599 5.06703 10.156 5.27003 10.367L11.121 16.359C11.395 16.625 11.668 16.75 11.996 16.75Z" fill="currentColor" fillOpacity="1"></path>
                </svg>
              </Link>
              {/* CTN MENU SERVICIOS - simplified for now, can add images later */}
            </li>
            <li>
              <Link to="/blog" className="p-[20px] hover:text-[#00d084] duration-200 transition-all block">Blog</Link>
            </li>
            <li>
              <Link to="/about" className="p-[20px] hover:text-[#00d084] duration-200 transition-all block">Acerca de</Link>
            </li>
          </ul>
          <ul className="absolute left-[50%] translate-x-[-50%]">
            <li>
              <Link to="/">
                <img className="w-[50px]" src={logo} alt="Logo" />
              </Link>
            </li>
          </ul>
          <ul className="flex gap-[10px] items-center max-sm:gap-[5px]">
            <li className="hidden md:block">
              <Link to="/booking" className="py-[10px] px-[25px] bg-[#00d084] text-white rounded-full">
                <span className="italic">01 89 71 24 21</span>
              </Link>
            </li>
            <li>
              <Link to="/booking" className="py-[10px] px-[25px] bg-[#00d084] text-white rounded-full">
                <span className="italic">Reservar cita</span>
              </Link>
            </li>
            <li 
              id="iconMenu"
              onClick={toggleMenu}
              className="w-[28px] h-[28px] bg-[#00d084] flex justify-center items-center rounded-full cursor-pointer lg:hidden"
            >
              <svg className="w-[15px] h-[15px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" />
              </svg>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
