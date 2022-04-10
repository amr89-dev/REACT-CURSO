import { memo } from "react";

const ContadorHijo = () => {
  console.log("Hijo contador se renderiza");
  const style = {
    border: "thin solid #000",
    margin: "1rem",
    padding: "1rem",
  };
  return <div style={style}>Contador Hijo</div>;
};

export default memo(ContadorHijo);
