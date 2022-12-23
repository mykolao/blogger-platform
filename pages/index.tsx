import { useEffect } from "react";

import { useRouter } from "next/router";

import routes from "routes";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(routes.blogs());
  }, [router]);

  return null;
};

export default Home;
