import Head from "next/head";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import ProductFeed from "../Components/ProductFeed";
import RecentItems from "../Components/RecentItems";
export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/* Header  */}
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* Product feed */}
        <ProductFeed products={products} />

        {/* Second Banner */}
        <RecentItems />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
