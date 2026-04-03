import ProductCard from "./ProductCard";

function App() {
  return (
    <div className="app">
      <h1>Product Catalog</h1>

      <div className="product-container">

        <ProductCard
          title="Smartphone"
          price={9999}
          imgUrl="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
          description="A high quality smartphone"
        />

        <ProductCard
          title="Laptop"
          price={45000}
          imgUrl="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
          description="A high quality laptop"
        />

        <ProductCard
          title="Buds"
          price={2000}
          imgUrl="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"
          description="A premium Buds"
        />

        <ProductCard
          title="Tablet"
          price={12000}
          imgUrl="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80"
          description="A stylish tablet"
        />

        <ProductCard
          title="Mini Robo"
          price={8000}
          imgUrl="https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80"
          description="A smart mini robot"
        />

        <ProductCard
          title="Speaker"
          price={2500}
          imgUrl="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80"
          description="A powerful speaker"
        />

      </div>
    </div>
  );
}

export default App;