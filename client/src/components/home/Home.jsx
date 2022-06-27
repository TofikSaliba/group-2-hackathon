import React, { useEffect } from "react";
import { useData } from "../../contexts/DataContext";

function Home() {
  const { setIsSpinning } = useData();

  useEffect(() => {
    setIsSpinning(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Home</div>;
}

export default Home;
