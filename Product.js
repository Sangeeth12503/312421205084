import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000', {
          headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4MTgxNDc4LCJpYXQiOjE3MTgxODExNzgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjQyZDk0NTY1LWVmODEtNGQ5ZS05ZTA0LTA2YmE1OTBjYmM1NSIsInN1YiI6InNhbmdlZXRoMTI1MDNAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiZG1hcnQiLCJjbGllbnRJRCI6IjQyZDk0NTY1LWVmODEtNGQ5ZS05ZTA0LTA2YmE1OTBjYmM1NSIsImNsaWVudFNlY3JldCI6IkZJWHNnd2RhbWtqcGVYdGQiLCJvd25lck5hbWUiOiJTYW5nZWV0aCBOZWVsYWthbmRhbiIsIm93bmVyRW1haWwiOiJzYW5nZWV0aDEyNTAzQGdtYWlsLmNvbSIsInJvbGxObyI6IjMxMjQyMTIwNTA4NCJ9.oUaaZypfw0uIUil8-J0vHDvzOL_FTTRH0nJAQTaBxuo'
          }
        });
        const data = await response.json();
        console.log(data);  
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {Array.isArray(products) ? (
          products.map((product, index) => (
            <li key={index}>
              <h2>{product.productname}</h2>
              <p>Price: ${product.price}</p>
            </li>
          ))
        ) : (
          <li>No products found</li>
        )}
      </ul>
    </div>
  );
};

export default function Product() {
  return (
    <div>
      <ProductList />
    </div>
  );
}
