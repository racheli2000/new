import { useEffect, useState } from "react";

// export function Clock(props) {
    
//   const [ticks, setTicks] = useState(0);

//   function tic(){
//     setTicks(ticks => ticks + 1);
//   };

//   useEffect(() => {
//     setInterval(tic, 1000);
//   }, []);

//   return(
//     <>
//     <h1>Ticks... {ticks}</h1>
//     </>
//   ) 
// }

// export function ChangeText(props){

//   const [temp, setTemp]= useState(0);
//   const arry = ['pink', 'yellow', 'red', 'green', 'orange', 'blue'];


//   function tic(){
//     setTemp(temp => temp + 1);
//   };

//   useEffect(() => {
//     setInterval(tic, 1000);
//   }, []);


//   return(
//     <>
//       <h1 style={{color: arry[temp%arry.length]} }>{arry[temp%arry.length]}</h1>
//     </>
//   )
// }


function useChangeAllTick(ms=1000) {

  const [tick, setTick]= useState(0);
  
  function tic(){
    setTick(tick => tick + 1);
  };

  useEffect(() => {
    setInterval(tic, ms);
  }, []);

  return tick;
  
}

export function Clock(){

  const ticks= useChangeAllTick();
  return(
    <h1>TIcks... {ticks}</h1>
  )
}

export function ChangeText(){

  const arry = ['pink', 'yellow', 'red', 'green', 'orange', 'blue'];

  const temp= useChangeAllTick()

  return(
    <>
      <h1 style={{color: arry[temp%arry.length]} }>{arry[temp%arry.length]}</h1>
    </>
  )
}


