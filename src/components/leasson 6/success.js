import { useSelector } from "react-redux";


export default function Success(){

    
    const data = useSelector(state => state.Login);

    return(
        <>
        <h1>SUCCESS PAGE</h1>
        <h2>Hello to: {data.name}</h2>
        <h2>Your age is: {data.age}</h2>
        </>
    )
}