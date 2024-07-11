import axios from "axios";
import { useState } from "react";

const urlBase = 'https://fakestoreapi.com';
const useFetch = () => {
  const [ apiData, setapiData ] = useState();

  const getApi = (patch) => {
    const url = `${urlBase}${patch}`
    axios.get(url)
      .then(res => setapiData(res.data))
      .catch(err => console.error(err))
  }

  return [ apiData, getApi ]
}

export default useFetch;