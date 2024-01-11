import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type productType = {
  id: number;
  name: string;
  price: number;
  size: string;
};
const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/login");
    }
  }, []);

  useEffect(() => {
    fetch("/api/product") // corrected the API endpoint from "/api.product" to "/api/product"
      .then((res) => res.json())
      .then((data) => setProducts(data.data)); // setProducts(data.data) assuming the API response has a "data" property
  }, []);

  return (
    <div>
      <h1>Ini Product Page</h1>
      {products.map((product: productType) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.size}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
