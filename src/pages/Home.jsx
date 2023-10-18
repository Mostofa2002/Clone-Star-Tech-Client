import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brand from "./Brand/Brand";
import FeatureCate from "./HomeSection/FeatureCate";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner />
      <Brand data={data} />
      <FeatureCate />
    </div>
  );
};

export default Home;
