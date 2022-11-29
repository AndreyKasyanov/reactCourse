import { CreateProduct } from "./component/CreateProduct";
import { ErrorMessage } from "./component/ErrorMessage";
import { Loader } from "./component/Loader";
import { Modal } from "./component/Modal";
import { Product } from "./component/Product";
import { useProducts } from "./hooks/products";

function App() {
  const { loading, products, error } = useProducts();

  return (
    <div className="conteiner mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      <Modal title="Create new product">
        <CreateProduct />
      </Modal>
    </div>
  );
}

export default App;
