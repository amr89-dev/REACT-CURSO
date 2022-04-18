import React from "react";
import { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const { db, error, loading } = useContext(CrudContext);
  return (
    <>
      <h2>Crud API</h2>
      <article className="grid-1-2">
        <CrudForm />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Lo siento, ocurrió un error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}

        {db && <CrudTable />}
      </article>
    </>
  );
};

export default CrudApi;
