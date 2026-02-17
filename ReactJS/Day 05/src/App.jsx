import ProductCard from "./ProductCard";

function App() {
  const products = [
    {
      title: "Essence Mascara Lash Princess",
      path: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
      price: 400
    },
    {
      title: "Eyeshadow Palette with Mirror",
      path: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
      price: 200
    },
    {
      title: "Powder Canister",
      path: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
      price: 300
    },{
      title: "Powder Canister",
      path: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
      price: 300
    },{
      title: "Powder Canister",
      path: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
      price: 300
    },{
      title: "Powder Canister",
      path: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
      price: 300
    }
  ];



  return (
    <div className="container-xxl">
      <div className="row">
        {
          products.map((data, index) => {
            return <ProductCard key={index} title={data.title} path={data.path} price={data.price} />
          })
        }
      </div>
    </div>

  )

}

export default App;