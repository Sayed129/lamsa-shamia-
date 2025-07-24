export default function ProductList() {
  const products = [
    { id: 1, name: "لانجيري فاخر", category: "لانجيري", price: "250", image: "/product1.jpg" },
    { id: 2, name: "عباية شامية", category: "عبايات", price: "400", image: "/product2.jpg" }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map(p => (
        <div key={p.id} className="border rounded-xl p-2 shadow">
          <img src={p.image} alt={p.name} className="rounded" />
          <h2 className="text-lg font-semibold">{p.name}</h2>
          <p>{p.category}</p>
          <p className="text-green-600 font-bold">{p.price} جنيه</p>
        </div>
      ))}
    </div>
  );
}