import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    //console.log("Fase de montaje")
  }, []);

  useEffect(() => {
    //console.log("Fase de actualizacion");

    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);
    return () => {
      //console.log("Fase de desmontaje");
      window.removeEventListener("scroll", detectarScroll);
    };
  }, [scrollY]);

  return (
    <>
      <h2>useEffect - Hook - Ciclo de vida</h2>
      <h3>El scroll Y del navegador es {scrollY}px</h3>
    </>
  );
}
