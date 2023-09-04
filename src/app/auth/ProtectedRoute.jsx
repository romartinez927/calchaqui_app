// ProtectedRoute.js
import { useAuth } from '@/context/ContextProvider';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }) => {
  const { accessToken } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      // Si el usuario no está autenticado, redirige a la página de inicio de sesión
      router.replace('/login');
    }
  }, [accessToken]);

  return children;
};

export default ProtectedRoute;
