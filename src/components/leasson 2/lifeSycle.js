
import { useEffect, useState } from "react";


export default function LifeSycle() {

  const [name, setName] = useState("");

  useEffect(() => {
    if (name) setName(name.toUpperCase());
  }, [name]);


  return (
    <>
      <h1>Hello {name}</h1>
      <input value={name} onChange={(n) => setName(n.target.value)}></input>
    </>
  );
}
