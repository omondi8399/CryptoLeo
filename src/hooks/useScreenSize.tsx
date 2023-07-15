import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<string>("lg");

  const updateScreenSize = () => {
    const { innerWidth } = window;

    if (innerWidth <= 400) {
      setScreenSize("xs");
    } else if (innerWidth < 640) {
      setScreenSize("sm");
    } else if (innerWidth < 768) {
      setScreenSize("md");
    } else if (innerWidth < 1024) {
      setScreenSize("lg");
    } else if (innerWidth < 1280) {
      setScreenSize("xl");
    } else {
      setScreenSize("2xl");
    }
  };

  useEffect(() => {
    updateScreenSize();
    const handleResize = () => updateScreenSize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
