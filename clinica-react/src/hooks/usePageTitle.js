import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      '/': 'Inicio | Clínica ESP',
      '/about': 'Acerca de Nosotros | Clínica ESP',
      '/services': 'Servicios Médicos | Clínica ESP',
      '/blog': 'Blog de Salud | Clínica ESP',
      '/booking': 'Reserva tu Cita | Clínica ESP',
    };

    document.title = routeTitles[location.pathname] || 'Clínica ESP';
  }, [location]);
};

export default usePageTitle;
