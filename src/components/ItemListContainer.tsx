interface ItemListContainerProps {
  greeting: string;
}

const ItemListContainer = ({ greeting }: ItemListContainerProps) => {
  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">{greeting}</h2>
      <div className="text-center text-gray-600">
        Próximamente mostraremos aquí nuestro catálogo de productos
      </div>
    </div>
  );
};

export default ItemListContainer;