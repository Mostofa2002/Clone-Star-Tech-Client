import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brand from "./Brand/Brand";
import FeatureCate from "./HomeSection/FeatureCate";
import Contact from "./HomeSection/Contact";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner />
      <Brand data={data} />
      <FeatureCate />
      <Contact />
    </div>
  );
};

export default Home;
