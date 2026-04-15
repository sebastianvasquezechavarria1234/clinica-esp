import blog1 from '../assets/blog1.webp';
import blog2 from '../assets/blog2.webp';
import blog3 from '../assets/blog3.webp';
import blog1_2 from '../assets/blog-1-2.webp';
import blog1_3 from '../assets/blog-1-3.webp';

const Blog = () => {
  const eyeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 4c4.29 0 7.863 2.429 10.665 7.154l.22 .379l.045 .1l.03 .083l.014 .055l.014 .082l.011 .1v.11l-.014 .111a.992 .992 0 0 1 -.026 .11l-.039 .108l-.036 .075l-.016 .03c-2.764 4.836 -6.3 7.38 -10.555 7.499l-.313 .004c-4.396 0 -8.037 -2.549 -10.868 -7.504a1 1 0 0 1 0 -.992c2.831 -4.955 6.472 -7.504 10.868 -7.504zm0 5a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
    </svg>
  );

  const messageIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-4 9h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m2 -4h-8a1 1 0 1 0 0 2h8a1 1 0 0 0 0 -2" />
    </svg>
  );

  const blogs = [
    {
      date: '21 de agosto - 4 min de lectura',
      title: 'Terapia de masaje con oxígeno: beneficios, técnicas y qué esperar',
      img: blog1,
      content: (
        <>
          <p className="mb-[20px]">La terapia de masaje con oxígeno es un tratamiento innovador que combina los beneficios de las técnicas de masaje tradicionales con los efectos terapéuticos del oxígeno...</p>
          <h3 className="text-[1.4rem] font-bold">¿Qué es la terapia de masaje con oxígeno?</h3>
          <p className="mb-[20px]">La terapia de masaje con oxígeno es una forma especializada de masaje que integra el oxígeno en el proceso de masaje...</p>
          <img className="w-full mb-[20px]" src={blog1_2} alt="Técnica de masaje" />
          <h3 className="text-[1.4rem] font-bold">Masaje Sueco</h3>
          <p className="mb-[20px]">El tipo de masaje más común utilizado en la oxigenoterapia...</p>
          <img className="w-full mb-[20px]" src={blog1_3} alt="Masaje con piedras calientes" />
        </>
      ),
      tags: ['Terapia de masacon oxigeno', 'Tecnica de masajes holisticos', 'Oxigeno y masaje'],
      stats: { views: 976, comments: 677 }
    },
    {
      date: '12 de agosto - 3 min de lectura',
      title: 'La importancia de la atención médica inmediata en el lugar de trabajo',
      img: blog2,
      content: (
        <>
          <p className="mb-[20px]">¡Hola, maravillosos lectores! Soy Hootie the Tweetie, tu guía amigable para todo lo relacionado con la seguridad en el lugar de trabajo...</p>
          <h3 className="text-[1.4rem] font-bold mb-[10px]">¿Por qué es importante la atención médica inmediata?</h3>
          {[
            { t: '1. Minimiza los riesgos para la salud', d: 'Los accidentes pueden ocurrir en cualquier momento...' },
            { t: '2. Reduce el tiempo de recuperación', d: 'Cuanto antes reciba un empleado atención médica, más rápido podrá comenzar a recuperarse.' }
          ].map((item, i) => (
            <div key={i}>
              <span className="font-semibold text-[19px]">{item.t}</span>
              <p className="mb-[20px]">{item.d}</p>
            </div>
          ))}
        </>
      ),
      tags: ['Seguridad en el lugar de trabajo', 'Primeros auxilios', 'Atención medica inmediata'],
      stats: { views: 840, comments: 450 }
    }
  ];

  return (
    <section className="mt-[120px] max-sm:px-[10px] flex flex-col gap-[50px]">
      {blogs.map((blog, idx) => (
        <section key={idx} className="max-w-[800px] mx-auto p-[20px] border-[1px] border-gray-300 max-sm:p-[10px] bg-white rounded-lg shadow-sm">
          <p className="text-gray-500 text-sm">{blog.date}</p>
          <h2 className="text-[2rem] mb-[40px] leading-[30px] font-bold">{blog.title}</h2>
          <img className="w-full block mb-[20px] rounded-md" src={blog.img} alt={blog.title} />
          {blog.content}
          <div className="flex gap-[10px] flex-wrap mt-[20px]">
            {blog.tags.map(tag => <p key={tag} className="border-[1px] border-gray-300 px-[5px] text-sm text-gray-600 rounded">{tag}</p>)}
          </div>
          <div className="flex gap-[40px] max-sm:gap-[10px] mt-[20px] pt-[20px] border-t border-gray-100">
            <p className="flex items-center gap-[5px] text-gray-500 text-sm">{eyeIcon} Vistas: {blog.stats.views}</p>
            <p className="flex items-center gap-[5px] text-gray-500 text-sm">{messageIcon} Comentarios: {blog.stats.comments}</p>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Blog;
