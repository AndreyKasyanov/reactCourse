import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "./component/Product";
//import { products } from "./data/products";
import { IProduct } from "./model";
import { AxiosError } from "axios";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchProducts() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="conteiner mx-auto max-w-2xl pt-5">
      {loading && <p className="text-center text-cyan-500">Loading...</p>}
      {error && <p className="text-center text-red-500 text-xl font-bold hover:decoration-dashed">{error}</p>}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      {/* <Product product={ products[0] } />
      <Product product={ products[1] } /> */}
    </div>
  );
}

export default App;
