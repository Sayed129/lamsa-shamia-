import ProductList from '../components/ProductList';
export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">منتجات لمسة شامية</h1>
      <ProductList />
    </main>
  )
}