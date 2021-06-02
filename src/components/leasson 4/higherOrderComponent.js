// import React from "react";

// function hocFunction(Component) {
    
//  return class HOC extends React.Component {
//     constructor(props) {
//       super(props);
//         this.state= {
//             tick:0
//         }
//     }

//     // useChangeAllTick = (ms = 1000) => {
//     //   const [tick, setTick] = useState(0);

//        tic() {
//         this.state.tick((tick) => tick + 1);
//       }

//       componentDidMount(){
//           setInterval(tic, props.ms);
//       }

//     //   return tick;
//     // }

//     render(){
//         return(
//             <>
//                 <Component ms={1000}/>
//             </>
//         )
//     }
//   }
// }

// const ChangeText= hocFunction(class ChangeText extends React.Component {
    
//   arry = ["pink", "yellow", "red", "green", "orange", "blue"];

//   render() {
//     return (
//       <>
//         <h1 style={{ color: arry[temp % arry.length] }}>
//           {arry[temp % arry.length]}
//         </h1>
//       </>
//     );
//   }
// }) 

// export default ChangeText;
