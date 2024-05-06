import Header from "./components/Header";
import Product from "./components/Product";

export default function Home() {
  return (
    <div className="sm:flex sm:flex-col sm:items-center">
      <Header />
      <Product />
    </div>
  );
}
