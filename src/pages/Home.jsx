import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";

import Brand from "./Brand/Brand";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner />
      <Brand data={data} />
    </div>
  );
};

export default Home;
