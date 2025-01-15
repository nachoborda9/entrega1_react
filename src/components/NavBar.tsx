import CartWidget from './CartWidget';
import { Store } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Store className="w-8 h-8" />
          <span className="text-xl font-bold">Mi Tienda</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-indigo-200 transition-colors">Inicio</a>
          <a href="#" className="hover:text-indigo-200 transition-colors">Productos</a>
          <a href="#" className="hover:text-indigo-200 transition-colors">Galería</a>
          <a href="#" className="hover:text-indigo-200 transition-colors">Contacto</a>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;