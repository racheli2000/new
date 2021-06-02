import "./App.css";
import Component1 from "./components/leasson 1/component1";
import Component2 from "./components/leasson 1/component2";
import Component3 from "./components/leasson 1/component3";
import FirstComponent from "./components/leasson 1/firstComponent";
import User from "./components/homework/leasson 1/user";
import { useState } from "react";
import LifeSycle from "./components/leasson 2/lifeSycle";
import List from "./components/leasson 2/list";
import Colors from "./components/leasson 2/colors";
import User2 from "./components/homework/leasson 2/user2";
import SelectHobbies from "./components/homework/leasson 2/select-hobbies";
import { Clock, Check } from "./components/leasson 3/customerhooks";
import Table from "./components/homework/leasson 3/table";
import ChangeText from "./components/leasson 4/higherOrderComponent";
import Images from "./components/leasson 4/images";

import a from "./image/1Q0A0078.JPG";
import b from "./image/1Q0A0048 1.JPG";
import c from "./image/1Q0A0382.JPG";
import d from "./image/1Q0A0371.JPG";

import { Provider } from "react-redux";
import ShowPupils from "./components/leasson 5/showPupils";
import store from "./components/leasson 5/redux/store";
import InsertPupil from "./components/leasson 5/insertPupil";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/leasson 6/home";
import Login from "./components/leasson 6/login";
import About from "./components/leasson 6/about";
import Manue from "./components/leasson 6/manue";
import Success from "./components/leasson 6/success";
import Swapi from "./components/leasson 7/swapi";

function App() {
  const [number, setNumber] = useState(1);

  // const changeNumber = (n) => {
  //   number=n.target.number;
  //   setNumber(number);
  // }

  {
    /* <FirstComponent/> */
  }

  {
    /* <State name="Racheli"/> */
  }
  {
    /* <br></br><br></br> */
  }

  {
    /* <input value={number} onChange={(n) => setNumber(n.target.value)}></input><br></br><br></br> */
  }
  {
    /* 
     <Component1 number={number} changeNumber={setNumber}/>
     <Component2 number={number} changeNumber={setNumber}/>
     <Component3 number={number} changeNumber={setNumber}/> */
  }

  {
    /* <User/> */
  }

  {
    /* <LifeSycle/> */
  }

  {
    /* <List/> */
  }

  {
    /* <Colors/> */
  }

  {
    /* <User2/> */
  }

  {
    /* <ChangeText/>
     <Clock/> */
  }

  {
    /* <Table/> */
  }

  {
    /* <ChangeText/> */
  }

  {
    /* <Images>
        <img src={a}></img>
        <img src={b}></img>
        <img src={c}></img>
        <img src={d}></img>

      </Images> */
  }

  return (
    <Provider store={store}>
      <Swapi/>
      {/* <Router>
        <Manue></Manue>
        <Switch>
        <Route path="/LOGIN">
          <Login/>
        </Route>
        <Route path="/ABOUT">
          <About/>
        </Route>
        <Route path="/SUCCESS">
          <Success/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
        </Switch>
      </Router> */}
      {/* <div className="App">

      <br></br>
        <InsertPupil />
        <ShowPupils />

      </div> */}
    </Provider>
  );
}

export default App;
