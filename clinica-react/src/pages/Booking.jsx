import { useState, useEffect } from 'react';

const Booking = () => {
  // Inicializar estado desde LocalStorage si existe
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('booking_draft');
    return savedData ? JSON.parse(savedData) : {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      date: ''
    };
  });

  const [loading, setLoading] = useState(false);

  // Guardar en LocalStorage cada vez que cambie el formulario
  useEffect(() => {
    localStorage.setItem('booking_draft', JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validaciones lógicas
    if (!formData.email.includes('@')) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }

    if (formData.phone.length < 7) {
      alert('Por favor, ingrese un número de teléfono válido.');
      return;
    }

    setLoading(true);
    
    // Simulación de envío a API
    setTimeout(() => {
      setLoading(false);
      alert(`¡Muchas gracias ${formData.firstName}! Su cita para el ${formData.date} ha sido reservada con éxito.`);
      
      // Limpiar formulario y almacenamiento
      const emptyState = { firstName: '', lastName: '', email: '', phone: '', date: '' };
      setFormData(emptyState);
      localStorage.removeItem('booking_draft');
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className="max-w-[650px] mx-auto px-[10px] mt-[120px] text-center" onSubmit={handleSubmit}>
      <h1 className="font__h1 text-[4rem] font-bold leading-[60px] mb-[30px] max-md:text-[2rem] max-md:leading-[30px] max-sm:mb-[30px]">
        <span className="hero__tt--span relative">Reserva</span> tu cita
      </h1>

      <div className="flex gap-[10px] flex-wrap sm:flex-nowrap">
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full py-[14px] px-[25px] border border-gray-200 rounded-md mb-[20px] max-sm:text-[12px] max-sm:py-[8px] max-sm:px-[14px] max-sm:mb-[10px] outline-none focus:ring-2 focus:ring-green-400"
          type="text"
          required
          placeholder="Ingrese sus nombres"
        />
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full py-[14px] px-[25px] border border-gray-200 rounded-md mb-[20px] max-sm:text-[12px] max-sm:py-[8px] max-sm:px-[14px] max-sm:mb-[10px] outline-none focus:ring-2 focus:ring-green-400"
          type="text"
          required
          placeholder="Ingrese sus Apellidos"
        />
      </div>

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full py-[14px] px-[25px] border border-gray-200 rounded-md mb-[20px] max-sm:text-[12px] max-sm:py-[8px] max-sm:px-[14px] max-sm:mb-[10px] outline-none focus:ring-2 focus:ring-green-400"
        type="email"
        required
        placeholder="Correo electrónico"
      />

      <div className="flex gap-[10px] max-sm:flex-col max-sm:gap-[0px]">
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full py-[14px] px-[25px] border border-gray-200 rounded-md mb-[20px] max-sm:text-[12px] max-sm:py-[8px] max-sm:px-[14px] max-sm:mb-[10px] outline-none focus:ring-2 focus:ring-green-400"
          type="tel"
          required
          placeholder="Teléfono"
        />
        <input
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full py-[14px] px-[25px] border border-gray-200 rounded-md mb-[20px] max-sm:text-[12px] max-sm:py-[8px] max-sm:px-[14px] max-sm:mb-[10px] outline-none focus:ring-2 focus:ring-green-400"
          type="datetime-local"
          required
        />
      </div>

      <div className="flex justify-start">
        <button
          disabled={loading}
          className={`py-[10px] italic text-[19px] border-none px-[25px] bg-[#00d084] w-[200px] text-white rounded-md transition-all cursor-pointer max-sm:text-[12px] max-sm:py-[8px] max-sm:px-[13px] max-sm:w-[130px] ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'}`}
          type="submit"
        >
          {loading ? 'Procesando...' : 'Reservar cita!'}
        </button>
      </div>
    </form>
  );
};

export default Booking;
