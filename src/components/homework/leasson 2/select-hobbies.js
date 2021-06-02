import { useState } from "react";
import ShowHbbies from "./show-hobbies";

export default function SelectHobbies(props) {
  const { name, lastName } = props;

  const [hobbies, setHobbies] = useState(["bake", "cook", "read", "draw"]);
  const [myHobbies, setMyHobbies] = useState([]);
  const [show, setShow] = useState(false);

  const check = (key) => {
    let temp = [...myHobbies];
    let i;
    for (i = 0; i < temp.length && temp[i] !== key; i++);

    if (i < temp.length) {
      temp=temp.filter((temp2) => temp2 !== temp[i]);
    } else {
      temp.push(key);
    }

    setMyHobbies(temp);
    console.log(myHobbies);
  };

  return (
    <>
      <h1>
        Hello {name} {lastName}
      </h1>

      <h2>Please choose your hobbies</h2>

      {hobbies.map((hobby) => {
        return (
          <>
            <input
              type="checkbox"
              value={hobby}
              onClick={(k) => check(k.target.value)}
            />
            <label>{hobby}</label>
            <br></br>
            <br></br>
          </>
        );
      })}

      <button onClick={() => setShow(true)}>show my hobbies</button>

      {show && <ShowHbbies myHobbies={myHobbies} />}
    </>
  );
}
