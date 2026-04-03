
import ProductCard from "./ProductCard";

function App() {
  return(
      <div>
    <h1>Product</h1>

    <ProductCard
    title="Smartphone"
    price={9999}
    imgUrl="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
    description="A high quality smartphone "/>   

    <ProductCard
    title="Laptop"
    price={9999}
    imgUrl="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
    description="A high quality smartphone "/>

    <ProductCard
    title="Headset"
    price={9999}
    imgUrl="https://images.unsplash.com/photo-1580910051074-84a77deb7158?auto=format&fit=crop&w=800&q=80"
    description="A high quality smartphone "/>

    <ProductCard
    title="Tab"
    price={9999}
    imgUrl="https://images.unsplash.com/photo-1580910051074-84a77deb7158?auto=format&fit=crop&w=800&q=80"
    description="A high quality smartphone "/>
 </div>
  );
}
export default App;