import { useEffect, useState } from "react";



export default function useGet() {

    const [page, setPage] = useState(1);
    
    const [apiRequest, setapiRequest] = useState([]);

    // const [array, setArray]= useState([]);

  useEffect(() => {
    fetch(
      `https://api.github.com/search/commits?q=repo:facebook/react+css&page=${page}`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/vnd.github.cloak-preview",
        }),
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setapiRequest(response.items);
        console.log(response.items);
        return response.items;
      })
      .catch((error) => console.log(error));
  }, []);
  return apiRequest;
}


