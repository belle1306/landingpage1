// utils/windowsize.js

import React from "react";

export default function Windowsize() {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowsize] = React.useState({
    width: isSSR ? 1000 : window.innerWidth,
    height: isSSR ? 600 : window.innerHeight,
  });

  function changeWindowsize() {
    setWindowsize({ width: window.innerWidth, height: window.innerHeight });
  }

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowsize);

    return () => {
      window.removeEventListener("resize", changeWindowsize);
    };
  }, []);

  return Windowsize;
}