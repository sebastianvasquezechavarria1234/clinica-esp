const Booking = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Cita reservada con éxito! (Simulado)');
  };

  return (
    <form className="max-w-[650px] mx-auto px-[10px] mt-[120px] text-center" onSubmit={handleSubmit}>
      <h1 className="font__h1 text-[4rem] font-bold leading-[60px] mb-[30px] max-md:text-[2rem] max-md:leading-[30px] max-sm:mb-[30px]">
        <span className="hero__tt--span relative">Reserva</span> tu cita
      </h1>

      <div className="flex gap-[10px] flex-wrap sm:flex-nowrap">
        <input
          className="w-full py-[14px] px-[25px] border border-gray-200 rounded-md mb-[20px] max-sm:text-[12px] max-sm:py-[8px] max-sm:px-[14px] max-sm:mb-[10px] outline-none focus:ring-2 focus:ring-green-400"
          type="text"
          required
          maxLength="100"
          minLength="3"
          placeholder="Ingrese sus nombres"
        />
        <input
          className="w-full py-[14px] px-[25px] border border-gray-200 rounded-md mb-[20px] max-sm:text-[12px] max-sm:py-[8px] max-sm:px-[14px] max-sm:mb-[10px] outline-none focus:ring-2 focus:ring-green-400"
          type="text"
          required
          maxLength="100"
          minLength="3"
          placeholder="Ingrese sus Apellidos"
        />
      </div>

      <input
        className="w-full py-[14px] px-[25px] border border-gray-200 rounded-md mb-[20px] max-sm:text-[12px] max-sm:py-[8px] max-sm:px-[14px] max-sm:mb-[10px] outline-none focus:ring-2 focus:ring-green-400"
        type="email"
        required
        maxLength="100"
        minLength="3"
        placeholder="Correo electrónico"
      />

      <div className="flex gap-[10px] max-sm:flex-col max-sm:gap-[0px]">
        <input
          className="w-full py-[14px] px-[25px] border border-gray-200 rounded-md mb-[20px] max-sm:text-[12px] max-sm:py-[8px] max-sm:px-[14px] max-sm:mb-[10px] outline-none focus:ring-2 focus:ring-green-400"
          type="tel"
          required
          placeholder="Teléfono"
        />
        <input
          className="w-full py-[14px] px-[25px] border border-gray-200 rounded-md mb-[20px] max-sm:text-[12px] max-sm:py-[8px] max-sm:px-[14px] max-sm:mb-[10px] outline-none focus:ring-2 focus:ring-green-400"
          type="datetime-local"
          required
        />
      </div>

      <div className="flex justify-start">
        <button
          className="py-[10px] italic text-[19px] border-none px-[25px] bg-[#00d084] w-[200px] text-white rounded-md hover:bg-green-600 transition-colors cursor-pointer max-sm:text-[12px] max-sm:py-[8px] max-sm:px-[13px] max-sm:w-[130px]"
          type="submit"
        >
          Reservar cita!
        </button>
      </div>
    </form>
  );
};

export default Booking;
