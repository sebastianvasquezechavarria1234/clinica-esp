import favicon from '../assets/favicon.png';

const Footer = () => {
  return (
    <footer className="bg-blue-100 rounded-[20px_20px_0_0] px-[10px] mt-[160px]">
      <div className="max-w-[1330px] p-[40px] mx-auto px-[20px] bg-green-50 grid grid-cols-5 rounded-[20px] translate-y-[-100px] max-lg:grid-cols-2 gap-[10px]">
        <article className="max-lg:col-span-2 max-lg:mb-[30px] block">
          <img className="w-[70px]" src={favicon} alt="Favicon" />
        </article>
        <article>
          <h3 className="font-bold text-[21px] mb-[10px] max-sm:text-[16px]">Nuestros sitios</h3>
          <a className="block py-[5px] hover:underline" href="#">Contabilidad</a>
          <a className="block py-[5px] hover:underline" href="#">App</a>
          <a className="block py-[5px] hover:underline" href="#">Tarifas</a>
          <a className="block py-[5px] hover:underline" href="#">Contacto</a>
        </article>
        <article>
          <h3 className="font-bold text-[21px] mb-[10px] max-sm:text-[16px]">Paginas legales</h3>
          <a className="block py-[5px] hover:underline" href="#">Legal</a>
          <a className="block py-[5px] hover:underline" href="#">Política de privacidad</a>
        </article>
        <article>
          <h3 className="font-bold text-[21px] mb-[10px] max-sm:text-[16px]">Síguenos</h3>
          <a className="block py-[5px] hover:underline" href="#">Facebook</a>
          <a className="block py-[5px] hover:underline" href="#">LinkedIn</a>
          <a className="block py-[5px] hover:underline" href="#">Instagram</a>
        </article>
        <article>
          <h3 className="font-bold text-[21px] mb-[10px] max-sm:text-[16px]">Ayuda y servicios</h3>
          <a className="block py-[5px] hover:underline" href="#">01 89 71 23 21</a>
          <a className="block py-[5px] hover:underline" href="#">Esp@gmail.com</a>
        </article>
      </div>
      <p className="text-center translate-y-[-50px]">Hecho por Sebastian Vasquez Echavarria</p>
    </footer>
  );
};

export default Footer;
