import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <ItemListContainer greeting="¡Bienvenidos a nuestra tienda en línea!" />
      </main>
    </div>
  );
}

export default App;