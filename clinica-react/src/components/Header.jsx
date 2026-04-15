import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import favicon from '../assets/favicon.png';
import service1 from '../assets/servicios-1.webp';
import service2 from '../assets/serivicios-2.png';
import service3 from '../assets/servicios-3.png';
import service4 from '../assets/servicios-4.png';
import service5 from '../assets/servicios-5.png';
import service6 from '../assets/servicios-6.png';
import blog1 from '../assets/blog1.webp';
import blog2 from '../assets/blog2.webp';
import blog3 from '../assets/blog3.webp';
import blog4 from '../assets/blog4.webp';
import blog5 from '../assets/blog5.webp';
import blog6 from '../assets/blog6.webp';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      {/* MENU RESPONSIVE */}
      <section className={`menu__responsive fixed left-0 top-0 w-full h-screen bg-blue-50 z-50 overflow-y-scroll duration-300 ${mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
        <div className="flex justify-between items-center p-[20px]">
          <Link to="/" onClick={toggleMobileMenu}>
            <img className="w-[30px]" src={logo} alt="Logo" />
          </Link>
          <li 
            onClick={toggleMobileMenu}
            className="w-[28px] h-[28px] bg-[var(--green)] flex justify-center items-center rounded-full cursor-pointer list-none">
            <svg className="w-[15px] h-[15px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
          </li>
        </div>
        <ul className={`menu__reponsive--ul p-[20px] duration-300 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[100px] opacity-0'}`}>
          <li><Link className="text-[18px] py-[10px] block border-b-[1px] border-gray-600" to="/" onClick={toggleMobileMenu}>Hogar</Link></li>
          <li><Link className="text-[18px] py-[10px] block border-b-[1px] border-gray-600" to="/services" onClick={toggleMobileMenu}>Servicios</Link></li>
          <li><Link className="text-[18px] py-[10px] block border-b-[1px] border-gray-600" to="/blog" onClick={toggleMobileMenu}>Blog</Link></li>
          <li><Link className="text-[18px] py-[10px] block border-b-[1px] border-gray-600" to="/about" onClick={toggleMobileMenu}>Acerca de</Link></li>
          <li><Link className="text-[18px] py-[10px] block border-b-[1px] border-gray-600" to="/booking" onClick={toggleMobileMenu}>Reservar cita</Link></li>
        </ul>
      </section>

      {/* HEADER */}
      <header 
        id="header" 
        style={{ 
            backgroundColor: 'white',
            boxShadow: scrolled ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : '5px 5px 18px rgba(0, 0, 0, 0.05)'
        }}
        className={`sticky top-[10px] z-40 px-[20px] duration-300 transition-all rounded-[15px] ${scrolled ? 'top-0 rounded-none w-full max-w-full m-0' : 'm-[0_20px] w-[calc(100%-40px)]'}`}>
        <nav className="flex justify-between items-center">
          <ul className="flex">
            <li><Link to="/" className="p-[20px] hover:text-[var(--green)] duration-200 transition-all block">Hogar</Link></li>
            <li className="header__servicios--li group relative">
              <Link to="/services" className="p-[20px] hover:text-[var(--green)] duration-200 transition-all flex items-center">
                Servicios
                <svg className="group-hover:rotate-180 duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11.996 16.75C12.332 16.75 12.621 16.617 12.879 16.36L18.73 10.36C18.934 10.156 19.043 9.90599 19.043 9.60999C19.043 8.99999 18.559 8.51599 17.957 8.51599C17.66 8.51599 17.379 8.63299 17.16 8.85199L12.004 14.164L6.84003 8.85199C6.62103 8.64099 6.34803 8.51599 6.04303 8.51599C5.44103 8.51599 4.95703 8.99999 4.95703 9.60899C4.95703 9.90599 5.06703 10.156 5.27003 10.367L11.121 16.359C11.395 16.625 11.668 16.75 11.996 16.75Z" fill="currentColor"></path></svg>
              </Link>
              <ul className="header__servicios--opacity invisible group-hover:visible group-hover:opacity-100 opacity-0 absolute w-[800px] bg-white left-[-100px] top-[96%] rounded-[15px] grid grid-cols-3 gap-[20px] p-[20px] shadow-xl transition-all duration-300">
                {[
                  { img: service1, title: 'CHEQUEO DE SALUD PREVENTIVO', id: 1 },
                  { img: service2, title: 'COBERTURA DE MEDICAMENTOS', id: 2 },
                  { img: service3, title: 'REHABILITACIÓN Y TERAPIAS', id: 3 },
                  { img: service4, title: 'CONSULTA Y ASESORAMIENTO', id: 4 },
                  { img: service5, title: 'SERVICIOS DE EMERGENCIA', id: 5 },
                  { img: service6, title: 'PRUEBAS DEL GENOMA', id: 6 },
                ].map(s => (
                  <li key={s.id}>
                    <Link to={`/services#servicios-${s.id}`} className="hover:text-[var(--green)]">
                      <img className="block mb-[10px] rounded-lg" src={s.img} alt="servicio" />
                      <h2 className="font-bold text-[0.8rem] uppercase">{s.title}</h2>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="group relative">
              <Link to="/blog" className="p-[20px] hover:text-[var(--green)] duration-200 transition-all flex items-center">
                Blog
                <svg className="group-hover:rotate-180 duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11.996 16.75C12.332 16.75 12.621 16.617 12.879 16.36L18.73 10.36C18.934 10.156 19.043 9.90599 19.043 9.60999C19.043 8.99999 18.559 8.51599 17.957 8.51599C17.66 8.51599 17.379 8.63299 17.16 8.85199L12.004 14.164L6.84003 8.85199C6.62103 8.64099 6.34803 8.51599 6.04303 8.51599C5.44103 8.51599 4.95703 8.99999 4.95703 9.60899C4.95703 9.90599 5.06703 10.156 5.27003 10.367L11.121 16.359C11.395 16.625 11.668 16.75 11.996 16.75Z" fill="currentColor"></path></svg>
              </Link>
              <ul className="invisible group-hover:visible group-hover:opacity-100 opacity-0 absolute w-[800px] bg-white left-[-300px] top-[96%] rounded-[15px] grid grid-cols-3 gap-[20px] p-[20px] shadow-xl transition-all duration-300">
                {[blog1, blog2, blog3, blog4, blog5, blog6].map((img, i) => (
                  <li key={i}>
                    <Link to="/blog">
                      <img className="block mb-[10px] rounded-lg" src={img} alt="blog" />
                      <h2 className="font-bold text-[0.8rem] uppercase truncate">Artículo informativo {i+1}</h2>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li><Link to="/about" className="p-[20px] hover:text-[var(--green)] duration-200 transition-all block">Acerca de</Link></li>
          </ul>
          <ul className="absolute left-[50%] translate-x-[-50%] hidden md:block">
            <li><Link to="/"><img className="w-[50px]" src={logo} alt="Logo" /></Link></li>
          </ul>
          <ul className="flex gap-[10px] items-center">
            <li className="hidden lg:block">
              <Link to="/booking" className="py-[10px] px-[25px] bg-[var(--green)] text-white rounded-full italic hover:bg-green-600 transition-colors">01 89 71 24 21</Link>
            </li>
            <li>
              <Link to="/booking" className="py-[10px] px-[25px] bg-[var(--green)] text-white rounded-full italic hover:bg-green-600 transition-colors">Reservar cita</Link>
            </li>
            <li 
              onClick={toggleMobileMenu}
              className="lg:hidden w-[28px] h-[28px] bg-[var(--green)] flex justify-center items-center rounded-full cursor-pointer">
              <svg className="w-[15px] h-[15px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
