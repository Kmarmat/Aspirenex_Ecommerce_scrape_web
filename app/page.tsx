import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";
import { FaCartShopping } from "react-icons/fa6";

const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      <section className="px-6 md:px-20 py-15">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text color-blue">
              Check your product details and start smart shopping here :{" "}
              <FaCartShopping fontSize="20px" />
            </p>

            <h1 className="head-text">
              Explore the Power of <br />
              <span className="text-primary color-blue"> Product Explorer</span>
            </h1>

            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>

            <Searchbar />
          </div>

          <HeroCarousel />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
