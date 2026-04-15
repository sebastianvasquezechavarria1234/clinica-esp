import { Link } from 'react-router-dom';
import heroStars from '../assets/index-hero-start.png';
import videoHero2 from '../assets/index-hero-video2.mp4';
import videoIndex from '../assets/index-video.mp4';
import videoHero3 from '../assets/index-hero-video3.mp4';
import carreraImg from '../assets/carrera.webp';
import trabajaImg from '../assets/trabaja.webp';
import service1 from '../assets/chequeo-de-salud.webp';
import service2 from '../assets/serivicios-2.png';
import service3 from '../assets/servicios-3.png';
import service4 from '../assets/servicios-4.png';
import service5 from '../assets/servicios-5.png';
import service6 from '../assets/servicios-6.png';
import socio1 from '../assets/socio1.png';
import socio2 from '../assets/socio2.webp';
import socio3 from '../assets/socio3.png';
import socio4 from '../assets/socio4.png';
import useCountUp from '../hooks/useCountUp';

const StatCard = ({ end, label }) => {
    const count = useCountUp(end);
    return (
        <div>
            <h1 className="text-[4rem] font-bold max-md:text-[1.5rem]">+{count.toLocaleString()}</h1>
            <p>{label}</p>
        </div>
    );
};

const Home = () => {
  return (
    <div>
      {/* ANIMACION ENTRADA */}
      <section className="entrada fixed z-50 w-full h-screen flex gap-[20px] items-center justify-center pointer-events-none">
        <div className="opacity flex flex-col gap-[50px]">
          <div className="carga__number relative w-[300px] h-[300px] flex justify-center items-center rounded-full text-[8rem]"></div>
          <div className="text-center h-[33px] overflow-hidden">
            <ul className="slider">
              <li><p className="text-[24px]">Cuídate</p></li>
              <li><p className="text-[24px]">Salud</p></li>
              <li><p className="text-[24px]">Confiansa</p></li>
              <li><p className="text-[24px]">Remedios</p></li>
            </ul>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="max-w-[1330px] px-[20px] mt-[120px] mx-auto flex gap-[40px] max-lg:flex-col max-sm:px-[10px] max-sm:mt-[60px]">
        <article className="w-[50%] max-lg:w-full">
          <h1 className="font__h1 text-[4rem] font-bold leading-[60px] mb-[30px] max-md:text-[2rem] max-md:leading-[30px] max-sm:mb-[10px]">
            ESP-¡Su hogar para una atención medica <span className="hero__tt--span relative">holística</span> y confiable!
          </h1>
          <p>ESP se fundó para hacer que los servicios de salud y bienestar sean accesibles para todos en su complejo residencial. En la actualidad, debido a un sistema de salud fragmentado y fracturado con un alto énfasis solo en la atención curativa,</p>
          <div className="flex gap-[10px] my-[20px]">
            <Link className="bg-[#00d084] py-[10px] px-[25px] rounded-full text-white inline-block flex items-center gap-[10px]" to="/booking">
              <span className="italic">Reservar una cita</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
            </Link>
            <Link to="/services" className="border-[1px] border-[#00d084] py-[10px] px-[24px] rounded-full flex items-center gap-[10px]">
              <span className="italic">Ver Servicios</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
            </Link>
          </div>
          <p>¡LLámanos al <span className="text-red-600 italic">01 89 71 24 21</span> o Reserva tu cita!</p>
          <div className="flex mt-[20px] gap-[10px] items-center">
            <img className="max-sm:w-[100px]" src={heroStars} alt="estrellas" />
            <p className="italic">Opinion de los clientes</p>
          </div>
        </article>
        <picture className="relative w-[50%] block max-lg:w-full max-lg:h-[80vw]">
          <div className="absolute left-0 top-[-50px] w-[300px] h-[300px] block max-lg:w-[40vw] max-lg:h-[40vw] max-lg:left-0 max-lg:top-0">
            <video className="video__1 w-full h-full object-cover" src={videoHero2} autoPlay loop muted></video>
          </div>
          <div className="absolute left-[100px] top-[30%] w-[350px] h-[350px] block z-10 max-lg:w-[40vw] max-lg:h-[40vw]">
            <video className="video__2 w-full h-full object-cover" src={videoIndex} autoPlay loop muted></video>
          </div>
          <div className="absolute right-[0px] top-[30px] w-[300px] h-[300px] block max-lg:w-[40vw] max-lg:h-[40vw]">
            <video className="video__3 w-full h-full object-cover" src={videoHero3} autoPlay loop muted></video>
          </div>
        </picture>
      </section>

      {/* NUMBERS */}
      <section className="number mt-[80px] max-w-[1330px] px-[100px] mx-auto flex items-center justify-between gap-[20px] text-center bg-green-50 p-[30px] rounded-[30px] max-lg:flex-col max-lg:px-[10px] max-lg:gap-[5px] max-lg:grid max-lg:grid-cols-2 max-sm:mt-[-50px] max-sm:p-[10px] max-sm:bg-transparent">
        <StatCard end={10000} label="Usuarios" />
        <span className="w-[1px] h-[100px] bg-black max-lg:h-0 max-lg:absolute"></span>
        <StatCard end={6000} label="Certificados" />
        <span className="w-[1px] h-[100px] bg-black max-lg:h-0 max-lg:absolute"></span>
        <StatCard end={5310} label="Tramites" />
        <span className="w-[1px] h-[100px] bg-black max-lg:h-0 max-lg:absolute"></span>
        <StatCard end={505} label="Cursos" />
      </section>

      {/* WHY CHOOSE US */}
      <section className="mt-[120px] max-w-[1330px] px-[20px] mx-auto flex gap-[40px] max-lg:flex-col max-sm:px-[10px] max-sm:gap-[20px] max-sm:mt-[60px]">
        <picture className="w-[50%] block max-lg:w-full">
          <img className="w-full h-full object-cover block" src={carreraImg} alt="Carrera" />
        </picture>
        <article className="w-[50%] max-lg:w-full">
          <h1 className="font__h1 text-[4rem] font-bold leading-[60px] mb-[30px] max-md:text-[2rem] max-md:leading-[30px] max-sm:mb-[10px]">
            ¿Por que elegir Esp ¡Tu salud nuestra <span className="hero__tt--span relative">Prioridad!</span>
          </h1>
          <p className="mb-[50px] max-sm:mb-[20px]">Brindando atención médica integral a casa, siempre en la puerta de su casa, con centros totalmente equipados, profesionales expertos y acceso digital instantáneo.</p>
          {[
            { id: 1, title: 'Centros totalmente equipados', desc: 'Nuestros centros están equipados con equipos de última generación para garantizar diagnósticos precisos y programas de bienestar efectivos.' },
            { id: 2, title: 'Profesionales bien formados', desc: 'Confíe en nuestro equipo de profesionales de la salud experimentados dedicados a administrar y elevar su bienestar de manera efectiva.' },
            { id: 3, title: 'Cuidado de la salud al alcance de su mano', desc: 'Aproveche el poder del acceso digital, administre su salud en cualquier momento y en cualquier lugar con nuestra intuitiva aplicación móvil.' }
          ].map((paso) => (
            <div key={paso.id}>
              <div className="flex gap-[10px] mb-[20px] items-center">
                <span className="w-[60px] h-[60px] bg-green-100 text-[#00d084] rounded-[10px] flex justify-center items-center text-[2rem] max-sm:w-[30px] max-sm:h-[30px] max-sm:text-[1rem]">{paso.id}</span>
                <h2 className="text-[1.6rem] font-bold max-sm:text-[1rem]">{paso.title}</h2>
              </div>
              <p>{paso.desc}</p>
              {paso.id < 3 && <span className="w-full h-[1px] bg-gray-500 block my-[30px] max-sm:my-[15px]"></span>}
            </div>
          ))}
        </article>
      </section>

      {/* JOIN US */}
      <section className="mt-[120px] max-w-[1330px] px-[20px] mx-auto flex gap-[40px] max-lg:flex-col-reverse max-sm:px-[10px] max-sm:gap-[20px] max-sm:mt-[60px]">
        <article className="w-[50%] max-lg:w-full">
          <h1 className="font__h1 text-[4rem] font-bold leading-[60px] mb-[30px] max-md:text-[2rem] max-md:leading-[30px]">
            ¿Por qué <span className="hero__tt--span relative">unirse!</span> a Esp
          </h1>
          <p className="mb-[20px]">En Esp, usted es más que un simple empleado: es una parte vital de la misión de mejorar la salud y el bienestar de comunidades enteras</p>
          {['Tener un impacto real', 'Entorno innovador', 'Cultura colaborativa', 'Desarrollo de carrera', 'Una misión con corazón'].map((item) => (
            <div key={item}>
              <h2 className="font-bold text-[22px] flex items-center gap-[10px] max-sm:text-[0.8rem] max-sm:gap-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                  <circle cx="10.5" cy="11.0872" r="10.5" fill="#2AD884"></circle>
                  <path d="M5 11.0872L8.5 14.5872L15.5 7.58716" stroke="white" strokeWidth="1.5" strokeLinecap="round"></path>
                </svg>
                {item}
              </h2>
              <span className="w-full h-[1px] bg-gray-500 block my-[15px] max-sm:my-[8px]"></span>
            </div>
          ))}
          <p>Unirse a LifeUno significa ser parte de una organización impulsada por un propósito donde su trabajo realmente importa. ¡Vamos a crear comunidades más saludables, juntos!</p>
          <Link className="py-[10px] px-[25px] italic bg-[#00d084] text-white rounded-full inline-flex items-center gap-[10px] mt-[20px]" to="/about">
            <span className="flex items-center gap-[10px]">Unirme <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg></span>
          </Link>
        </article>
        <picture className="w-[50%] h-[700px] block max-lg:w-full max-lg:h-[70vw]">
          <img className="w-full h-full object-cover block" src={trabajaImg} alt="Trabaja" />
        </picture>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="servicios mt-[120px] max-w-[1330px] px-[20px] mx-auto max-sm:px-[10px] max-sm:mt-[60px]">
        <h1 className="text-[4rem] font-bold leading-[60px] mb-[30px] text-center max-md:text-[2rem] max-md:leading-[30px]">
          Nuestros <span className="hero__tt--span relative">Servicios!</span>
        </h1>
        <p className="max-w-[650px] mx-auto text-center mb-[30px]">Explore los diversos servicios de atención médica de Esp ¡Excelencia tecnológica y atención experta para sus necesidades de bienestar únicas!</p>
        <div className="grid grid-cols-3 gap-[30px] max-lg:grid-cols-2 max-sm:gap-[10px]">
          {[
            { img: service1, title: 'CHEQUEO DE SALUD PREVENTIVO', desc: 'es un examen médico programado con el objetivo de evaluar tu estado de salud general...', link: '/services#servicios-1' },
            { img: service2, title: 'COBERTURA DE MEDICAMENTOS', desc: 'facilitamos la entrega de medicamentos recetados y cubren el costo de...', link: '/services#servicios-2' },
            { img: service3, title: 'REHABILITACIÓN Y TERAPIAS', desc: 'Incluye servicios como fisioterapia, terapia ocupacional y del habla, así...', link: '/services#servicios-3' },
            { img: service4, title: 'CONSULTA Y ASESORAMIENTO', desc: 'Médicos, nutricionistas, terapeutas y consejeros expertos ofrecen...', link: '/services#servicios-4' },
            { img: service5, title: 'SERVICIOS DE EMERGENCIA', desc: 'Médicos y enfermeras expertos brindan atención...', link: '/services#servicios-5' },
            { img: service6, title: 'PRUEBAS DEL GENOMA', desc: 'Se ofrece un programa personalizado para la salud y la productividad...', link: '/services#servicios-6' }
          ].map((serv, index) => (
            <article key={index} className="max-sm:mb-[20px]">
              <picture className="block mb-[20px] max-sm:mb-[10px]">
                <img src={serv.img} alt={serv.title} />
              </picture>
              <h2 className="text-[21px] font-bold mb-[20px] max-sm:text-[11px] max-sm:mb-[10px]">{serv.title}</h2>
              <p className="block mb-[20px]">{serv.desc}</p>
              <Link className="py-[8px] px-[15px] bg-[#00d084] rounded-full text-white hover:opacity-80 duration-200 transition-all" to={serv.link}>
                <span className="italic">Aprender mas</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="mt-[120px] max-w-[1330px] px-[20px] mx-auto max-sm:px-[10px] max-sm:mt-[60px]">
        <h1 className="text-[4rem] font-bold leading-[60px] mb-[30px] text-center max-md:text-[2rem] max-md:leading-[30px] max-sm:mb-[10px]">
          Nuestros <span className="hero__tt--span relative">Socios</span>
        </h1>
        <p className="max-w-[500px] mx-auto text-center mb-[30px]">Nuestros centros de atencion están siendo subsidiados por todos nuestro socios</p>
        <div className="grid grid-cols-5 gap-[15px] max-md:grid-cols-2 max-sm:gap-[10px]">
          {[socio1, socio2, socio3, socio4].map((socio, idx) => (
            <article key={idx} className="socios__article h-[100px] bg-white p-[20px] rounded-[10px] flex justify-center items-center">
              <img src={socio} alt={`Socio ${idx + 1}`} />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
