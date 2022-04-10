import { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);
      try {
        const optsAuth = {
          method: "GET",
          headers: {
            Accept: "application/json",
            "api-token":
              "QWmQx6LVmUWIhKxFate6sJHKJocQy8j-Sz-kAjVEnKTp_ym6guvNlGRBj-3m05lT2pE",
            "user-email": "amr89.dev@gmail.com",
          },
        };

        const key = await helpHttp().get(
          "https://www.universal-tutorial.com/api/getaccesstoken",
          optsAuth
        );

        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${key.auth_token}`,
            Accept: "application/json",
          },
        };
        //console.log(options);

        const res = await fetch(url, options);

        if (!res.ok) {
          let err = new Error("Error en la peticion fetch");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrió un error";
          throw err;
        }

        const json = await res.json();

        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (!signal.aborted) {
          setData(null);
          setError(err);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url]);

  return { data, error, loading };
};
