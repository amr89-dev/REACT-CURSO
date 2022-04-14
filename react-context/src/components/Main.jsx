import React from "react";

const Main = ({ theme, texts }) => {
  return (
    <main className={theme}>
      <p>{texts.mainContent}</p>
      <p>{texts.mainWelcome}</p>
      <p>{texts.mainHello}</p>
    </main>
  );
};

export default Main;
