import { Link } from 'react-router-dom';
import service1 from '../assets/chequeo-de-salud.webp';
import service2 from '../assets/serivicios-2.png';
import service3 from '../assets/servicios-3.png';
import service4 from '../assets/servicios-4.png';
import service5 from '../assets/servicios-5.png';
import service6 from '../assets/servicios-6.png';

const Services = () => {
  const checkmark = (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
      <circle cx="10.5" cy="11.0872" r="10.5" fill="#2AD884"></circle>
      <path d="M5 11.0872L8.5 14.5872L15.5 7.58716" stroke="white" strokeWidth="1.5" strokeLinecap="round"></path>
    </svg>
  );

  return (
    <section className="max-w-[1330px] mx-auto px-[20px] mt-[120px] max-sm:px-[10px] max-sm:mt-[60px] flex flex-col gap-[120px] max-sm:gap-[60px]">
      
      {/* servicio 1 */}
      <section id="servicios-1" className="flex gap-[40px] max-lg:flex-col max-sm:gap-[20px]">
        <article className="w-[50%] max-lg:w-full">
          <h1 className="font__h1 text-[4rem] font-bold leading-[60px] mb-[40px] max-w-[700px] mx-auto max-md:mb-[20px] max-md:text-[2rem] max-md:leading-[30px]">
            Chequeo de salud <span className="hero__tt--span relative">preventivo</span>
          </h1>
          {[
            'Permite identificar enfermedades en sus etapas iniciales, lo que facilita tratamientos más efectivos y menos invasivos.',
            'Ayuda a mantener un estado óptimo de salud al identificar y corregir factores de riesgo antes de que se conviertan en problemas graves.',
            'La detección temprana y la prevención pueden evitar costos significativos asociados con el tratamiento de enfermedades avanzadas.',
            'Proporciona recomendaciones específicas basadas en tus resultados y antecedentes médicos, ayudándote a hacer ajustes en tu estilo de vida.',
            'Permite monitorear y gestionar factores de riesgo como colesterol alto, hipertensión o diabetes, mejorando tu salud a largo plazo.'
          ].map((text, i) => (
            <div key={i} className="flex gap-[20px] items-start mb-[20px]">
              {checkmark}
              <p className="max-w-[80%]">{text}</p>
            </div>
          ))}
          <div className="mt-[70px] max-sm:mt-[25px]">
            {[
              { id: 1, title: 'Solicita una Cita', content: <>Llama a la línea de atención al cliente <span className="text-red-600 italic">01 89 71 24 21</span> o llena el siguiente <Link className="italic text-red-600" to="/booking">Formulario</Link> para solicitar una cita.</> },
              { id: 2, title: 'Proporciona Información Relevante', content: 'Durante la solicitud, proporciona información personal y médica básica para personalizar el chequeo.' },
              { id: 3, title: 'Confirma la Cita y la Ubicación', content: 'Recibe la confirmación y asegúrate de saber a dónde asistir.' },
              { id: 4, title: 'Realiza el Chequeo', content: 'Asiste a la cita y participa en todas las evaluaciones programadas.' },
              { id: 5, title: 'Mantén el Hábito', content: 'Programa chequeos regulares como parte de tu rutina preventivo.' }
            ].map((step) => (
              <div key={step.id}>
                <span className="w-[60px] h-[60px] mb-[10px] bg-green-100 text-green-700 rounded-[10px] flex justify-center items-center text-[2rem] max-sm:w-[30px] max-sm:h-[30px] max-sm:text-[1rem]">{step.id}</span>
                <h2 className="text-[1.6rem] font-bold max-sm:text-[1rem]">{step.title}</h2>
                <p>{step.content}</p>
                <span className="relative z-30 w-full h-[1px] bg-black/60 block my-[30px] max-sm:my-[15px]"></span>
              </div>
            ))}
          </div>
        </article>
        <picture className="w-[50%] max-lg:w-full">
          <img className="sticky top-[100px] w-full" src={service1} alt="Chequeo preventivo" />
        </picture>
      </section>

      <span className="relative z-30 w-full h-[1px] bg-black/60 block"></span>

      {/* servicio 2 */}
      <section id="servicios-2" className="flex flex-row-reverse gap-[40px] max-lg:flex-col max-sm:gap-[20px]">
        <article className="w-[50%] max-lg:w-full">
          <h1 className="font__h1 text-[4rem] font-bold leading-[60px] mb-[40px] max-w-[700px] mx-auto max-md:mb-[20px] max-md:text-[2rem] max-md:leading-[30px]">
             <span className="hero__tt--span relative">Cobertura</span> de medicamentos
          </h1>
          {[
            'Te asegura que puedas obtener los medicamentos recetados sin enfrentar dificultades económicas importantes.',
            'Disminuye el gasto de tu bolsillo ya que la EPS cubre una parte o la totalidad del costo.',
            'Facilita seguir el tratamiento prescrito y mejorar tu salud.',
            'Asegura medicamentos esenciales y de alta calidad.',
            'Ofrece una red de protección contra costos elevados.'
          ].map((text, i) => (
            <div key={i} className="flex gap-[20px] items-start mb-[20px]">
              {checkmark}
              <p className="max-w-[80%]">{text}</p>
            </div>
          ))}
          <div className="mt-[70px] max-sm:mt-[25px]">
            {[
              { id: 1, title: 'Obtén una Receta Médica', content: 'Consulta con tu médico para obtener la receta necesaria.' },
              { id: 2, title: 'Adquiere el Medicamento en una Farmacia Aprobada', content: 'Dirígete a una farmacia dentro de la red de tu EPS.' },
              { id: 3, title: 'Mantén un Registro', content: 'Lleva el control de reabastecimientos.' }
            ].map((step) => (
              <div key={step.id}>
                <span className="w-[60px] h-[60px] mb-[10px] bg-green-100 text-green-700 rounded-[10px] flex justify-center items-center text-[2rem] max-sm:w-[30px] max-sm:h-[30px] max-sm:text-[1rem]">{step.id}</span>
                <h2 className="text-[1.6rem] font-bold max-sm:text-[1rem]">{step.title}</h2>
                <p>{step.content}</p>
                <span className="relative z-30 w-full h-[1px] bg-black/60 block my-[30px] max-sm:my-[15px]"></span>
              </div>
            ))}
          </div>
        </article>
        <picture className="w-[50%] max-lg:w-full">
            <iframe 
                className="sticky top-[100px] w-full h-[30vw] min-h-[300px]"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d31728.55610647751!2d-75.55141528249509!3d6.25457245397878!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1726923746055!5m2!1ses-419!2sco"
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </picture>
      </section>

      <span className="relative z-30 w-full h-[1px] bg-black/60 block"></span>

      {/* servicio 3 */}
      <section id="servicios-3" className="flex gap-[40px] max-lg:flex-col max-sm:gap-[20px]">
        <article className="w-[50%] max-lg:w-full">
          <h1 className="font__h1 text-[4rem] font-bold leading-[60px] mb-[40px] max-w-[700px] mx-auto max-md:mb-[20px] max-md:text-[2rem] max-md:leading-[30px]">
            Rehabilitación y <span className="hero__tt--span relative">Terapias</span>
          </h1>
          {[
            'Ayuda a restaurar la capacidad funcional después de lesiones o cirugías.',
            'Reduce el dolor crónico o agudo a través de terapias físicas.',
            'Previene complicaciones adicionales como atrofia muscular.',
            'Mejora movilidad, coordinación y fuerza.',
            'Apoyo emocional y psicológico durante la recuperación.'
          ].map((text, i) => (
            <div key={i} className="flex gap-[20px] items-start mb-[20px]">
              {checkmark}
              <p className="max-w-[80%]">{text}</p>
            </div>
          ))}
        </article>
        <picture className="w-[50%] max-lg:w-full">
          <img className="sticky top-[100px] w-full" src={service3} alt="Rehabilitación" />
        </picture>
      </section>

      <span className="relative z-30 w-full h-[1px] bg-black/60 block"></span>

      {/* servicio 4, 5, 6 - simplified for this demo but easily extendable following the pattern */}
      <section id="servicios-4" className="flex flex-row-reverse gap-[40px] max-lg:flex-col max-sm:gap-[20px]">
        <article className="w-[50%] max-lg:w-full">
           <h1 className="font__h1 text-[4rem] font-bold leading-[60px] mb-[40px] max-w-[700px] mx-auto max-md:mb-[20px] max-md:text-[2rem] max-md:leading-[30px]">
              <span className="hero__tt--span relative">Consulta</span> y asesorias
           </h1>
           <p>Recibe opiniones de especialistas y planes adaptados a tus necesidades.</p>
        </article>
        <picture className="w-[50%] max-lg:w-full">
          <img className="sticky top-[100px] w-full" src={service4} alt="Consultas" />
        </picture>
      </section>
      
      <span className="relative z-30 w-full h-[1px] bg-black/60 block"></span>

      <section id="servicios-5" className="flex gap-[40px] max-lg:flex-col max-sm:gap-[20px]">
        <article className="w-[50%] max-lg:w-full">
           <h1 className="font__h1 text-[4rem] font-bold leading-[60px] mb-[40px] max-w-[700px] mx-auto max-md:mb-[20px] max-md:text-[2rem] max-md:leading-[30px]">
              <span className="hero__tt--span relative">Servicios</span> de emergencia
           </h1>
           <p>Intervención rápida en situaciones de urgencia y atención completa estabilizar al paciente.</p>
        </article>
        <picture className="w-[50%] max-lg:w-full">
          <img className="sticky top-[100px] w-full" src={service5} alt="Emergencias" />
        </picture>
      </section>

      <span className="relative z-30 w-full h-[1px] bg-black/60 block"></span>

      <section id="servicios-6" className="flex flex-row-reverse gap-[40px] max-lg:flex-col max-sm:gap-[20px]">
        <article className="w-[50%] max-lg:w-full">
           <h1 className="font__h1 text-[4rem] font-bold leading-[60px] mb-[40px] max-w-[700px] mx-auto max-md:mb-[20px] max-md:text-[2rem] max-md:leading-[30px]">
              <span className="hero__tt--span relative">Pruebas</span> de genoma
           </h1>
           <p>Identificación de predisposiciones genéticas y personalización de tratamientos.</p>
        </article>
        <picture className="w-[50%] max-lg:w-full">
          <img className="sticky top-[100px] w-full" src={service6} alt="Genoma" />
        </picture>
      </section>

    </section>
  );
};

export default Services;
