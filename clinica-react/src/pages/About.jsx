import acercaDeImg from '../assets/acerca-de.jpg';
import card1Icon from '../assets/acerca-de-card-1.png';
import card2Icon from '../assets/acerca-de-card-2.png';
import card3Icon from '../assets/acerca-de-card-3.webp';

const About = () => {
  return (
    <section className="max-w-[1330px] mt-[120px] px-[20px] mx-auto max-sm:px-[10px]">
      <article className="text-center">
        <h1 className="font__h1 text-[4rem] font-bold leading-[60px] mb-[30px] max-md:text-[2rem] max-md:leading-[30px] max-sm:mb-[10px]">
          ESP-¡Su hogar para una atención medica <span className="hero__tt--span relative">holística</span> y confiable!
        </h1>
        <p className="mb-[20px]">
          Esp se fundó para hacer que los servicios de salud y bienestar sean accesibles para todos en su complejo residencial. 
          En la actualidad, debido a un sistema de salud fragmentado y fracturado con un alto énfasis solo en la atención curativa, 
          una persona lucha en múltiples puntos de contacto, ya sea la facilidad de acceso o el establecimiento de confianza mientras busca apoyo de atención médica.
        </p>
        <p className="mb-[30px]">
          Nuestro objetivo en LifeUno es actuar como una capa entre el paciente y el sistema existente y utilizar nuestro ecosistema de atención médica bien construido 
          para proporcionar una experiencia predictiva y ofrecer una amplia gama de servicios de bienestar holístico a nuestros miembros.
        </p>
      </article>
      
      <picture>
        <img className="rounded-[18px] w-full" src={acercaDeImg} alt="Acerca de" />
      </picture>

      <div className="grid grid-cols-3 mt-[20px] gap-[20px] max-md:grid-cols-1 max-sm:mt-[10px] max-sm:gap-[10px]">
        <article className="p-[20px] bg-white shadow-md rounded-[18px]">
          <h2 className="text-[1.3rem] font-bold flex items-center gap-[5px] mb-[10px] max-sm:text-[0.8rem] max-sm:mb-[5px]">
            <img className="max-sm:w-[20px]" src={card1Icon} alt="Icono Visión" />
            Nuestra Visión
          </h2>
          <p>Influir y construir comunidades solidarias en todo el mundo que provoquen un cambio profundo en la forma en que vemos la salud, el bienestar y el bienestar, para nosotros y por nosotros.</p>
        </article>
        
        <article className="p-[20px] bg-white shadow-md rounded-[18px]">
          <h2 className="text-[1.3rem] font-bold flex items-center gap-[5px] mb-[10px] max-sm:text-[0.8rem] max-sm:mb-[5px]">
            <img className="max-sm:w-[20px]" src={card2Icon} alt="Icono Misión" />
            Nuestra Misión
          </h2>
          <p>Validar y mejorar el bienestar personal de 1.000.000 de personas para 2027. Al reunir procesos, personas, proveedores y tecnología en una plataforma sin fisuras, estaremos presentes en 20 ubicaciones urbanas.</p>
        </article>
        
        <article className="p-[20px] bg-white shadow-md rounded-[18px]">
          <h2 className="text-[1.3rem] font-bold flex items-center gap-[5px] mb-[10px] max-sm:text-[0.8rem] max-sm:mb-[5px]">
            <img className="max-sm:w-[20px]" src={card3Icon} alt="Icono Valores" />
            Nuestros Valores y Creencias
          </h2>
          <p>Nuestros valores fundamentales radican en ser humanos, no juzgar y no discriminar en todas nuestras acciones.</p>
        </article>
      </div>
    </section>
  );
};

export default About;
