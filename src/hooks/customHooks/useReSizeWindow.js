import { useEffect, useState } from "react";

export const useReSizeWindow = () => {
  const [screenIsOnLandscape, setScreenIsOnLandscape] = useState(false);

  function isLandscape() {
    const isLandscape = window.innerHeight < window.innerWidth;
    if (isLandscape) {
      setScreenIsOnLandscape(true);
    } else {
      setScreenIsOnLandscape(false);
    }
  }
  window.addEventListener("resize", isLandscape);
  useEffect(() => {
    isLandscape();
  }, []);
  return { screenIsOnLandscape };
};
